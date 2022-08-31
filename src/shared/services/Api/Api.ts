import { User } from 'firebase/auth';
import { Users } from '../../Types/Types';
import { dataBase } from '../Firebase/FirebaseConfig';


const addUserInDB = async (user: any) => {
	try{
		await dataBase.collection('users').doc(user.user.uid).set({
			name: user.user.displayName,
			avatar: user.user.photoURL,
		}, { merge: true });
	}catch(error){
		alert('Erro');
	}
};

const getNewContactList = async (userId: string) => {
	const list: Users[] = [];
	const result = await dataBase.collection('users').get();
	result.forEach((doc) => {
		const data = doc.data();
		if(doc.id !== userId){
			list.push({
				uid: doc.id,
				name: data.name,
				avatar: data.avatar,
			});
		}
	});
	console.log(list);
	return list;
};

const addNewChat = async (user1: User, user2: Users) => {
	const newChat = await dataBase.collection('chats').add({
		messages: [],
		users: [user1.uid, user2.uid],
	});
};

export const Api = {
	addUserInDB,
	getNewContactList,
	addNewChat
};
