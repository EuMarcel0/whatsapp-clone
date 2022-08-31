import firebase from 'firebase/compat/app';
import { getAuth } from 'firebase/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

import { Environments } from '../../environment/Environment';

const firebaseConfig = {
	apiKey: Environments.apiKey,
	authDomain: Environments.authDomain,
	projectId: Environments.projectId,
	storageBucket: Environments.storageBucket,
	messagingSenderId: Environments.messagingSenderId,
	appId: Environments.appId
};

const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const dataBase = app.firestore();
