import { createContext, useContext, useState } from 'react';
import { ChatListItemContextProps, ChatListProps, ChatListItemProviderProps } from './ChatListTypes';
import ChatAvatarImage from '../../assets/images/the_rock.jpg';

export const ChatListItemContext = createContext({} as ChatListItemContextProps);

export const ChatListItemProvider = ({ children }: ChatListItemProviderProps) => {
	const [chatListItem, setChatListItem] = useState<ChatListProps[]>([
		{
			image: ChatAvatarImage,
			name: 'Marcelo Silva',
			lastMessage: 'A s Oi, tudo bem? Como vai? Tudo bem? Como vai? Tudo bem? Como vai? Tudo bem? Como vai? Tudo bem? Com',
			date: 'Há 1 hora',
		},
		{
			image: ChatAvatarImage,
			name: 'José Souza',
			lastMessage: 'X Oi, tudo bem? Como vai? Tudo bem? Como vai? Tudo bem? Como vai? Tudo bem? Como vai? Tudo bem? Com',
			date: 'Há 1 hora',
		},
		{
			image: ChatAvatarImage,
			name: 'Roberto Souza',
			lastMessage: 'C Oi, tudo bem? Como vai? Tudo bem? Como vai? Tudo bem? Como vai? Tudo bem? Como vai? Tudo bem? Com',
			date: 'Há 1 hora',
		},
		{
			image: ChatAvatarImage,
			name: 'Ze Souza',
			lastMessage: 'A Oi, tudo bem? Como vai? Tudo bem? Como vai? Tudo bem? Como vai? Tudo bem? Como vai? Tudo bem? Com',
			date: 'Há 1 hora',
		},
		{
			image: ChatAvatarImage,
			name: 'Abrão Souz',
			lastMessage: 'Ui Oi, tudo bem? Como vai? Tudo bem? Como vai? Tudo bem? Como vai? Tudo bem? Como vai? Tudo bem? Com',
			date: 'Há 1 hora',
		},
		{
			image: ChatAvatarImage,
			name: 'Abrão Souz',
			lastMessage: 'Ui Oi, tudo bem? Como vai? Tudo bem? Como vai? Tudo bem? Como vai? Tudo bem? Como vai? Tudo bem? Com',
			date: 'Há 1 hora',
		},
		{
			image: ChatAvatarImage,
			name: 'Abrão Souz',
			lastMessage: 'Ui Oi, tudo bem? Como vai? Tudo bem? Como vai? Tudo bem? Como vai? Tudo bem? Como vai? Tudo bem? Com',
			date: 'Há 1 hora',
		},
		{
			image: ChatAvatarImage,
			name: 'Abrão Souz',
			lastMessage: 'Ui Oi, tudo bem? Como vai? Tudo bem? Como vai? Tudo bem? Como vai? Tudo bem? Como vai? Tudo bem? Com',
			date: 'Há 1 hora',
		},
		{
			image: ChatAvatarImage,
			name: 'Abrão Souz',
			lastMessage: 'Ui Oi, tudo bem? Como vai? Tudo bem? Como vai? Tudo bem? Como vai? Tudo bem? Como vai? Tudo bem? Com',
			date: 'Há 1 hora',
		},
		{
			image: ChatAvatarImage,
			name: 'Abrão Souz',
			lastMessage: 'Ui Oi, tudo bem? Como vai? Tudo bem? Como vai? Tudo bem? Como vai? Tudo bem? Como vai? Tudo bem? Com',
			date: 'Há 1 hora',
		},
		{
			image: ChatAvatarImage,
			name: 'Abrão Souz',
			lastMessage: 'Ui Oi, tudo bem? Como vai? Tudo bem? Como vai? Tudo bem? Como vai? Tudo bem? Como vai? Tudo bem? Com',
			date: 'Há 1 hora',
		},
		{
			image: ChatAvatarImage,
			name: 'Abrão Souz',
			lastMessage: 'Ui Oi, tudo bem? Como vai? Tudo bem? Como vai? Tudo bem? Como vai? Tudo bem? Como vai? Tudo bem? Com',
			date: 'Há 1 hora',
		},
	]);

	return (
		<ChatListItemContext.Provider value={{ chatListItem }}>
			{children}
		</ChatListItemContext.Provider>
	);
};

export const useChatListItem = () => useContext(ChatListItemContext);
