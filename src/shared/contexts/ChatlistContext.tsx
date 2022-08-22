import { createContext, useCallback, useContext, useState } from 'react';
import { ChatListItemContextProps, ChatListProps, ChatListItemProviderProps } from './ChatListTypes';
import ChatAvatarImage from '../../assets/images/the_rock.jpg';

export const ChatListItemContext = createContext({} as ChatListItemContextProps);

export const ChatListItemProvider = ({ children }: ChatListItemProviderProps) => {
	const [showChatArea, setShowChatArea] = useState(false);
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
	]);
	const [activeChat, setActiveChat] = useState<ChatListProps>();

	const handleSetActiveChat = useCallback((data: ChatListProps[], id: number) => {
		setActiveChat(data[id]);
		handleShowChatArea();
	}, [chatListItem]);

	const handleShowChatArea = useCallback(() => {
		setShowChatArea(true);
	}, [chatListItem, activeChat]);

	return (
		<ChatListItemContext.Provider value={{ chatListItem, activeChat, showChatArea, handleSetActiveChat }}>
			{children}
		</ChatListItemContext.Provider>
	);
};

export const useChatListContext = () => useContext(ChatListItemContext);
