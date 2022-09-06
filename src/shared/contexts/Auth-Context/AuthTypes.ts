
import { User } from 'firebase/auth';

export interface AuthContextProps{
	users: User;
	isAuthenticated: boolean;
	loginFacebook: () => void;
	login: () => void;
	logout: () => void;
}

export interface AuthProviderProps{
	children: React.ReactNode;
}
