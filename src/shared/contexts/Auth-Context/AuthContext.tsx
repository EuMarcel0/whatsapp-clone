import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { FacebookAuthProvider, GoogleAuthProvider, signInWithPopup, User } from 'firebase/auth';

import { AuthContextProps, AuthProviderProps } from './AuthTypes';
import { auth } from '../../services/Firebase/FirebaseConfig';
import { Api } from '../../services/Api/Api';

export const AuthContext = createContext({} as AuthContextProps);


export const AuthProvider = ({ children }: AuthProviderProps) => {
	const [users, setUsers] = useState<User>({} as User);
	const [showUserInfos, setShowUserInfos] = useState(false);
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	const handleLoginWithGoogle = useCallback(() => {
		const provider = new GoogleAuthProvider();
		signInWithPopup(auth, provider)
			.then((response) => {
				if (response.user) {
					setUsers(response.user);
					Api.addUserInDB(response);
					setIsAuthenticated(true);

				}
			}).catch((error) => {
				alert(error.message);
			});
	}, [users]);

	const handleLoginWithFacebook = useCallback(() => {
		const provider = new FacebookAuthProvider();
		signInWithPopup(auth, provider)
			.then((response) => {
				if (response.user) {
					setUsers(response.user);
					Api.addUserInDB(response);
					setIsAuthenticated(true);
				}
			}).catch((error) => {
				alert(error.message);
			});
	}, [users]);


	const toggleShowUserInfos = useCallback(() => {
		setShowUserInfos(!showUserInfos);
	}, [showUserInfos]);

	const handleLogout = useCallback(() => {
		auth.signOut();
		setIsAuthenticated(false);
	}, [isAuthenticated]);

	return (
		<AuthContext.Provider
			value={{
				users,
				isAuthenticated,
				showUserInfos,
				login: handleLoginWithGoogle,
				loginFacebook: handleLoginWithFacebook,
				logout: handleLogout,
				toggleShowUserInfos
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuthContext = () => useContext(AuthContext);
