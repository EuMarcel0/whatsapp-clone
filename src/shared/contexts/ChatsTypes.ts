export interface ChatListProps {
	id: number;
	image: string;
	name: string;
	lastMessage: string;
	date: string;
}
export interface UserProps {
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
	user: UserProps[];
	chatListItem: ChatListProps[];
	activeChat: ActiveChatProps | undefined;
	showChatArea: boolean;
	handleSetActiveChat: (data: ChatListProps[], id: number) => void;
	handleShowChatArea: () => void;
}
export interface ChatListItemProviderProps{
	children: React.ReactNode;
}
