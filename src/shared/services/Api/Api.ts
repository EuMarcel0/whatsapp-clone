import { collection, addDoc, getDoc, doc, getDocs} from 'firebase/firestore';
import { dataBase } from '../Firebase/FirebaseConfig';
import { User } from 'firebase/auth';
import { Users } from '../../Types/Types';

const addUserInDB = async (user: User) : Promise <User | Error> => {
	try{
		if(user){
			const docRef = await addDoc(collection(dataBase, 'users'), {
				name: user.displayName,
				avatar: user.photoURL,
			});
		}
		return new Error('Usuario no encontrado');
	}catch(error){
		return new Error((error as { message: string }).message || 'Erro ao criar usuário');
	}
};

const getUsersInDB = async (uid: string) => {
	try{
		const list: Users[]= [];
		const querySnapshot = await getDocs(collection(dataBase, 'users'));
		querySnapshot.forEach((doc) => {
			const data = doc.data();
			if(uid !== doc.id){
				list.push({
					uid: doc.id,
					name: data.name,
					avatar: data.avatar,
				});
			}
		});
		return list;

	}catch(error){
		return new Error((error as { message: string }).message || 'Erro ao consultar dados');
	}

};
export const Api = {
	addUserInDB,
	getUsersInDB
};
