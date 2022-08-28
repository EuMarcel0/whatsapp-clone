export interface ChatListProps {
	id: number;
	image: string;
	name: string;
	lastMessage: string;
	date: string;
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
export interface ActiveChatProps {
	id: number;
	image: string;
	name: string;
	lastMessage: string;
	date: string;
}
export interface ChatListItemContextProps {
	users: UsersProps[];
	chatListItem: ChatListProps[];
	newContact: NewContactProps[];
	chat: ChatListProps[];
	activeChat: ActiveChatProps | undefined;
	showChatArea: boolean;
	handleSetActiveChat: (data: ChatListProps[], id: number) => void;
	handleShowChatArea: () => void;
}
export interface ChatListItemProviderProps{
	children: React.ReactNode;
}
