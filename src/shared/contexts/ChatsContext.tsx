import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { ChatListItemContextProps, ChatListProps, ChatListItemProviderProps } from './ChatsTypes';
import { useAuthContext } from './AuthContext';
import { Api } from '../services/Api/Api';
import { Users } from '../Types/Types';

export const ChatContext = createContext({} as ChatListItemContextProps);

export const ChatsProvider = ({ children }: ChatListItemProviderProps) => {
	const [showChatArea, setShowChatArea] = useState(false);
	const [chatListItem, setChatListItem] = useState<ChatListProps[]>([]);
	const [activeChat, setActiveChat] = useState<ChatListProps>();
	const [chat, setChat] = useState<ChatListProps[]>([]);
	const [newChat, setNewChat] = useState<Users[]>([]);
	const { users } = useAuthContext();

	const handleSetActiveChat = useCallback((data: ChatListProps[], id: number) => {
		setActiveChat(data[id]);
		setShowChatArea(true);
	}, [chatListItem]);

	const handleShowChatArea = useCallback(() => {
		setShowChatArea(false);
	}, []);

	/**
	 * Get all users in database and set in newChat state
	 */
	useEffect(() => {
		const newChatList = async () => {
			if (users.uid !== undefined) {
				const result = await Api.getNewContactList(users.uid);
				setNewChat(result);
			}
		};
		newChatList();
	}, [users, newChat]);

	return (
		<ChatContext.Provider value={{
			chatListItem,
			newContact: newChat,
			chat,
			activeChat,
			showChatArea,
			handleSetActiveChat,
			handleShowChatArea
		}}
		>
			{children}
		</ChatContext.Provider>
	);
};

export const useChatListContext = () => useContext(ChatContext);
