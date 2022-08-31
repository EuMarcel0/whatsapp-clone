import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { ChatListItemContextProps, ChatListProps, ChatListItemProviderProps } from './ChatsTypes';
import ChatAvatarImage2 from '../../assets/images/the_rock2.jpg';
import ChatAvatarImage from '../../assets/images/the_rock.jpg';
import { useAuthContext } from './AuthContext';
import { Api } from '../services/Api/Api';
import { Users } from '../Types/Types';

export const ChatContext = createContext({} as ChatListItemContextProps);

export const ChatsProvider = ({ children }: ChatListItemProviderProps) => {
	const [showChatArea, setShowChatArea] = useState(false);
	const [chatListItem, setChatListItem] = useState<any[]>([
		{
			uid: 1,
			image: ChatAvatarImage2,
			name: 'Marcelo Silva',
			lastMessage: 'A s Oi, tudo bem? Como vai? Tudo bem? Como vai? Tudo bem? Como vai? Tudo bem? Como vai? Tudo bem? Com',
			date: 'Há 1 hora',
		},
		{
			uid: 2,
			image: ChatAvatarImage,
			name: 'José Souza',
			lastMessage: 'X Oi, tudo bem? Como vai? Tudo bem? Como vai? Tudo bem? Como vai? Tudo bem? Como vai? Tudo bem? Com',
			date: 'Há 1 hora',
		},
	]);
	const [newChat, setNewChat] = useState<Users[]>([]);
	const [activeChat, setActiveChat] = useState<ChatListProps>();
	const [chat, setChat] = useState<ChatListProps[]>([
		{
			id: 13,
			image: ChatAvatarImage2,
			name: 'Marcelo Silva',
			lastMessage: 'Olá, tudo bem?',
			date: '22:00',
		},
		{
			id: 1234,
			image: ChatAvatarImage2,
			name: 'Marcelo Silva',
			lastMessage: 'Olá, tudo bem? Olá, tudo bem? Olá, tudo bem? Olá, tudo bem? Olá, tudo bem? Olá, tudo bem?',
			date: '23:00',
		},
		{
			id: 13,
			image: ChatAvatarImage2,
			name: 'Marcelo Silva',
			lastMessage: 'Oi',
			date: '00:00',
		},
	]);
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
