import firebase from 'firebase/compat/app';
import { User } from 'firebase/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

import { dataBase } from '../Firebase/FirebaseConfig';
import { Users } from '../../Types/Types';
import { ChatListProps } from '../../contexts/ChatsTypes';




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
	dataBase.collection('users').doc(user1.uid).update({
		chats: firebase.firestore.FieldValue.arrayUnion({
			chatId: newChat.id,
			title: user2.name,
			image: user2.avatar,
			with: user2.uid,
		})
	});

	dataBase.collection('users').doc(user2.uid).update({
		chats: firebase.firestore.FieldValue.arrayUnion({
			chatId: newChat.id,
			title: user1.displayName,
			image: user1.photoURL,
			with: user1.uid,
		})
	});
};

const onChatList = (uid: string, setChatListItem: React.Dispatch<React.SetStateAction<ChatListProps[]>>) => {
	return dataBase.collection('users').doc(uid).onSnapshot((doc) => {
		if(doc.exists){
			const data = doc.data();
			if(data?.chats){
				setChatListItem(data?.chats);
			}
		}
	});
};

export const Api = {
	addUserInDB,
	getNewContactList,
	addNewChat,
	onChatList
};
