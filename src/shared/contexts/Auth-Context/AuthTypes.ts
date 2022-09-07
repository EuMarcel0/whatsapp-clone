
import { User } from 'firebase/auth';

export interface AuthContextProps{
	users: User;
	isAuthenticated: boolean;
	showUserInfos: boolean;
	loginFacebook: () => void;
	login: () => void;
	logout: () => void;
	toggleShowUserInfos: () => void;
}

export interface AuthProviderProps{
	children: React.ReactNode;
}
