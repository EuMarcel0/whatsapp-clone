
import { User } from 'firebase/auth';

export interface AuthContextProps{
	accessToken: string | undefined;
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
