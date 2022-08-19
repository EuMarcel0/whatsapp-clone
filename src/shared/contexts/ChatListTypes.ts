
export interface ChatListProps {
	image: string;
	name: string;
	lastMessage: string;
	date: string;
}


export interface ChatListItemContextProps {
	chatListItem: ChatListProps[];
}

export interface ChatListItemProviderProps{
	children: React.ReactNode;
}
