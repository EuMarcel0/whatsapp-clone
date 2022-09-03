import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { ChatListItemContextProps, ChatListProps, ChatListItemProviderProps, ChatProps, UsersInChat } from './ChatsTypes';
import { useAuthContext } from './AuthContext';
import { Api } from '../services/Api/Api';
import { Users } from '../Types/Types';

export const ChatContext = createContext({} as ChatListItemContextProps);

export const ChatsProvider = ({ children }: ChatListItemProviderProps) => {
	const [chatListItem, setChatListItem] = useState<ChatListProps[]>([]);
	const [usersInChat, setUsersInChat] = useState<UsersInChat[]>([]);
	const [activeChat, setActiveChat] = useState<ChatListProps>();
	const [showChatArea, setShowChatArea] = useState(false);
	const [newChat, setNewChat] = useState<Users[]>([]);
	const [chat, setChat] = useState<ChatProps[]>([]);
	const { users } = useAuthContext();

	const handleSetActiveChat = useCallback((data: ChatListProps[], id: any) => {
		setActiveChat(data[id]);
		setShowChatArea(true);
	}, [chatListItem]);

	const handleShowChatArea = useCallback(() => {
		setShowChatArea(false);
	}, []);

	/**
	 * Get all users in database and set in newContact state
	 */
	useEffect(() => {
		const newContactList = async () => {
			if (users.uid !== undefined) {
				const result = await Api.getNewContactList(users.uid);
				setNewChat(result);
			}
		};
		newContactList();
	}, [users]);

	/**
	 * Get all chats in database and set in chatList state
	 */
	useEffect(() => {
		if (users.uid !== null) {
			const unsub = Api.onChatList(users.uid, setChatListItem);
			return unsub;
		}
	}, [users]);

	/**
	 * Get all chats messages in database and set in chat state
	 */
	useEffect(() => {
		setChat([]);
		const unsub = Api.onChatContent(activeChat?.chatId, setChat, setUsersInChat);
		return unsub;
	}, [activeChat?.chatId]);

	return (
		<ChatContext.Provider value={{
			chatListItem,
			newContact: newChat,
			chat,
			usersInChat,
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
