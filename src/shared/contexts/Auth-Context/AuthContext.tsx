import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { FacebookAuthProvider, GoogleAuthProvider, signInWithPopup, User } from 'firebase/auth';

import { AuthContextProps, AuthProviderProps } from './AuthTypes';
import { auth } from '../../services/Firebase/FirebaseConfig';
import { Api } from '../../services/Api/Api';

export const AuthContext = createContext({} as AuthContextProps);

const ACCESS_TOKEN = 'access_token';

export const AuthProvider = ({ children }: AuthProviderProps) => {
	const [users, setUsers] = useState<User>({} as User);
	const [showUserInfos, setShowUserInfos] = useState(false);
	const [accessToken, setAccessToken] = useState<string | undefined>(undefined);

	const handleLoginWithGoogle = useCallback(() => {
		const provider = new GoogleAuthProvider();
		signInWithPopup(auth, provider)
			.then((response) => {
				if (response.user) {
					setUsers(response.user);
					Api.addUserInDB(response);
					setAccessToken(response.user.uid);
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
		setAccessToken(undefined);
	}, [accessToken]);

	const isAuthenticated = useMemo(() => accessToken !== undefined, [accessToken]);

	console.log(isAuthenticated);

	return (
		<AuthContext.Provider
			value={{
				accessToken,
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
