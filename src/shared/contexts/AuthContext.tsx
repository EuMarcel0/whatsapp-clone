import { createContext, useCallback, useContext, useState } from 'react';
import { FacebookAuthProvider, signInWithPopup, User } from 'firebase/auth';

import { AuthContextProps, AuthProviderProps } from './AuthTypes';
import { Auth } from '../services/Firebase/FirebaseConfig';
import { Api } from '../services/Api/Api';


export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: AuthProviderProps) => {
	const [users, setUsers] = useState<User>({} as User);
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	const handleLoginWithGoogle = useCallback(() => {
		const provider = new FacebookAuthProvider();
		signInWithPopup(Auth, provider)
			.then((response) => {
				if (response.user) {
					setUsers(response.user);
					Api.addUserInDB(response.user);
					setIsAuthenticated(true);
				}
			}).catch((error) => {
				alert(error.message);
			});
	}, [isAuthenticated, users]);

	const handleLogout = useCallback(() => {
		setIsAuthenticated(false);
	}, [isAuthenticated]);

	return (
		<AuthContext.Provider value={{ users, isAuthenticated, login: handleLoginWithGoogle, logout: handleLogout }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuthContext = () => useContext(AuthContext);
