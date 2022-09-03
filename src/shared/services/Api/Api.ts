import firebase from 'firebase/compat/app';
import { User } from 'firebase/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

import { ActiveChatProps, ChatListProps, ChatProps, UsersInChat } from '../../contexts/ChatsTypes';
import { dataBase } from '../Firebase/FirebaseConfig';
import { Users } from '../../Types/Types';

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
	return list;
};

const addNewChat = async (user1: User, user2: Users) => {
	const newChat = await dataBase.collection('chats').add({
		messages: [],
		users: [user1.uid, user2.uid],
	});
	dataBase.collection('users').doc(user1.uid).set({
		chats: firebase.firestore.FieldValue.arrayUnion({
			chatId: newChat.id,
			title: user2.name,
			image: user2.avatar,
			with: user2.uid,
		})
	}, { merge: true });

	dataBase.collection('users').doc(user2.uid).set({
		chats: firebase.firestore.FieldValue.arrayUnion({
			chatId: newChat.id,
			title: user1.displayName,
			image: user1.photoURL,
			with: user1.uid,
		})
	}, { merge: true});
};

const onChatList = (uid: string, setChatListItem: React.Dispatch<React.SetStateAction<ChatListProps[]>>) => {
	return dataBase.collection('users').doc(uid).onSnapshot((doc) => {
		if(doc.exists){
			const data = doc.data();
			if(data?.chats){
				const chats = [...data.chats];
				chats.sort((a, b) => {
					if(a.lastMessageDate === undefined){
						return -1;
					}
					if(b.lastMessageDate === undefined){
						return -1;
					}
					if(a.lastMessageDate.seconds < b.lastMessageDate.seconds){
						return 1;
					}else{
						return -1;
					}
				});
				setChatListItem(data?.chats);
			}
		}
	});
};

const onChatContent = (chatId: string | undefined, setChat: React.Dispatch<React.SetStateAction<ChatProps[]>>, setUsersInChat: React.Dispatch<React.SetStateAction<UsersInChat[]>>) => {
	return dataBase.collection('chats').doc(chatId).onSnapshot((doc) => {
		if(doc.exists){
			const data = doc.data();
			if(data?.messages){
				setChat(data?.messages);
				setUsersInChat(data?.users);
			}
		}
	});
};

const sendMessage = async (chatData: ActiveChatProps | undefined, userId: string, type: string, body: string, usersInChat: any) => {
	const now = new Date();
	dataBase.collection('chats').doc(chatData?.chatId).update({
		messages: firebase.firestore.FieldValue.arrayUnion({
			type,
			author: userId,
			body,
			date: now,
		})
	});
	for( const users in usersInChat){
		const user = await dataBase.collection('users').doc(usersInChat[users]).get();
		const userData = user.data();
		if(userData?.chats){

			const chats = [...userData.chats];
			for(const i in chats){
				if(chats[i].chatId === chatData?.chatId){
					chats[i].lastMessage = body;
					chats[i].lastMessageDate = now;
				}
			}
			await dataBase.collection('users').doc(usersInChat[users]).update({ chats });
		}
	}
};

export const Api = {
	addUserInDB,
	getNewContactList,
	addNewChat,
	onChatList,
	onChatContent,
	sendMessage,
};
