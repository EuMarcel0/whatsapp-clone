import { createContext, useCallback, useContext, useState } from 'react';
import { FacebookAuthProvider, signInWithPopup, User } from 'firebase/auth';
import { useCollection } from 'react-firebase-hooks/firestore';

import { AuthContextProps, AuthProviderProps } from './AuthTypes';
import { auth } from '../services/Firebase/FirebaseConfig';


export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: AuthProviderProps) => {
	const [users, setUsers] = useState<User>({} as User);
	const [isAuthenticated, setIsAuthenticated] = useState(false);


	const handleLoginWithGoogle = useCallback(() => {
		const provider = new FacebookAuthProvider();
		signInWithPopup(auth, provider)
			.then((response) => {
				if (response.user) {
					setUsers(response.user);
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
