export interface ChatListProps {
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
	chatListItem: ChatListProps[];
	activeChat: ActiveChatProps | undefined;
	showChatArea: boolean;
	handleSetActiveChat: (id: number) => void;
}
export interface ChatListItemProviderProps{
	children: React.ReactNode;
}
