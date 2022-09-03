import { Users } from '../Types/Types';

export interface ChatListProps {
	chatId: string;
	name: string;
	image: string;
	lastMessage: string;
	lastMessageDate: any;
	title: string;
	width: string;
}
export interface ChatProps {
	author: string;
	body: string;
	date: any;
	type: string;
}
export interface NewContactProps{
	id: number;
	image: string;
	name: string;
}
export interface UsersProps {
	id: number;
	image: string;
	name: string;
	lastMessage: string;
	date: string;
}

export interface UsersInChat {
	uid: string;
}
export interface ActiveChatProps {
	chatId: string;
	image: string;
	lastMessage: string;
	title: string;
	width: string;
}
export interface ChatListItemContextProps {
	chatListItem: ChatListProps[];
	newContact: Users[];
	usersInChat: UsersInChat[];
	chat: ChatProps[];
	activeChat: ActiveChatProps | undefined;
	showChatArea: boolean;
	handleSetActiveChat: (data: ChatListProps[], id: number) => void;
	handleShowChatArea: () => void;
}
export interface ChatListItemProviderProps{
	children: React.ReactNode;
}
