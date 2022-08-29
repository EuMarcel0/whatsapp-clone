import { getFirestore } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

import { Environments } from '../../environment/Environment';

const firebaseConfig = {
	apiKey: Environments.apiKey,
	authDomain: Environments.authDomain,
	projectId: Environments.projectId,
	storageBucket: Environments.storageBucket,
	messagingSenderId: Environments.messagingSenderId,
	appId: Environments.appId
};

const app = initializeApp(firebaseConfig);
export const Auth = getAuth(app);
export const dataBase = getFirestore(app);
