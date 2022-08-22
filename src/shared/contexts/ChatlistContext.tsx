import { createContext, useCallback, useContext, useState } from 'react';
import { ChatListItemContextProps, ChatListProps, ChatListItemProviderProps, ActiveChatProps } from './ChatListTypes';
import ChatAvatarImage from '../../assets/images/the_rock.jpg';

export const ChatListItemContext = createContext({} as ChatListItemContextProps);

export const ChatListItemProvider = ({ children }: ChatListItemProviderProps) => {
	const [chatListItem, setChatListItem] = useState<ChatListProps[]>([
		{
			id: 1,
			image: ChatAvatarImage,
			name: 'Marcelo Silva',
			lastMessage: 'A s Oi, tudo bem? Como vai? Tudo bem? Como vai? Tudo bem? Como vai? Tudo bem? Como vai? Tudo bem? Com',
			date: 'Há 1 hora',
		},
		{
			id: 2,
			image: ChatAvatarImage,
			name: 'José Souza',
			lastMessage: 'X Oi, tudo bem? Como vai? Tudo bem? Como vai? Tudo bem? Como vai? Tudo bem? Como vai? Tudo bem? Com',
			date: 'Há 1 hora',
		},
		{
			id: 3,
			image: ChatAvatarImage,
			name: 'Roberto Souza',
			lastMessage: 'C Oi, tudo bem? Como vai? Tudo bem? Como vai? Tudo bem? Como vai? Tudo bem? Como vai? Tudo bem? Com',
			date: 'Há 1 hora',
		},
		{
			id: 4,
			image: ChatAvatarImage,
			name: 'Ze Souza',
			lastMessage: 'A Oi, tudo bem? Como vai? Tudo bem? Como vai? Tudo bem? Como vai? Tudo bem? Como vai? Tudo bem? Com',
			date: 'Há 1 hora',
		},
		{
			id: 5,
			image: ChatAvatarImage,
			name: 'Abrão Souz',
			lastMessage: 'Ui Oi, tudo bem? Como vai? Tudo bem? Como vai? Tudo bem? Como vai? Tudo bem? Como vai? Tudo bem? Com',
			date: 'Há 1 hora',
		},
	]);
	const [activeChat, setActiveChat] = useState<ActiveChatProps[]>([]);
	const [showChatArea, setShowChatArea] = useState(false);

	const handleShowChatArea = useCallback(() => {
		setShowChatArea(true);
	}, []);

	return (
		<ChatListItemContext.Provider value={{ chatListItem, activeChat, showChatArea, handleShowChatArea }}>
			{children}
		</ChatListItemContext.Provider>
	);
};

export const useChatListItem = () => useContext(ChatListItemContext);
