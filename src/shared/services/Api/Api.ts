import { collection, addDoc } from 'firebase/firestore';
import { dataBase } from '../Firebase/FirebaseConfig';
import { User } from 'firebase/auth';
import { Users } from './Types';

const addUserInDB = async (user: User) => {
	try{
		const docRef = await addDoc(collection(dataBase, 'users'), {
			name: user.displayName,
			avatar: user.photoURL,
		});
		console.log('Document written with ID: ', docRef.id);
	}catch(error){
		alert(error);
	}
};

export const Api = {
	addUserInDB
};
