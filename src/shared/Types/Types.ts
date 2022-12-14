export interface Users {
	uid: string;
	name: string;
	avatar: string;
	chats?: string[];
}

export interface User {
	uid: string;
	name: string;
	avatar: string;
}

export interface Message {
	author: string;
	body: string;
	date: any;
	type: string;
}
