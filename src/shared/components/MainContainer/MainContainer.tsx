import { useState } from 'react';

import { Box, Paper, useMediaQuery, useTheme } from '@mui/material';

import { useChatListContext } from '../../contexts/Chats-Context/ChatsContext';
import { ChatListProps } from '../../contexts/Chats-Context/ChatsTypes';
import { SearchInputChat } from './components/SearchInputChat';
import { UserProfileInfo } from './components/UserProfileInfo';
import { UserContentArea } from './components/UserContentArea';
import ChatMessagesZone from './components/ChatMessagesZone';
import { ContactInfos } from './components/ContactInfos';
import { ChatListItem } from './components/ChatListItem';
import { NewChatList } from './components/NewChatList';
import { Intro } from './components/Intro';


export const MainContainer = () => {
	const theme = useTheme();
	const { showChatArea, chatListItem, activeChat, newContact, handleSetActiveChat } = useChatListContext();
	const [newChatListItem, setNewChatListItem] = useState<ChatListProps[]>(chatListItem);
	const [showNewContactList, setShowNewContactList] = useState(false);
	const [searchValue, setSearchValue] = useState('');
	const xlDown = useMediaQuery(theme.breakpoints.down('xl'));

	const handleOrderChatByName = () => {
		if (chatListItem.length > 0) {
			const newChatListItem = chatListItem.sort((a, b) => {
				return a.title.localeCompare(b.title);
			});
			setNewChatListItem(newChatListItem);
			setSearchValue('');
		}
	};

	const handleShowNewContactList = () => {
		setShowNewContactList(!showNewContactList);
		setSearchValue('');
	};

	const filteredChatListItem: ChatListProps[] = searchValue.length > 0 ? chatListItem.filter(item => item.title.toLocaleLowerCase().includes(searchValue)) : chatListItem;

	return (
		<Box
			width='100%'
			height='98%'
			maxWidth={xlDown ? '100%' : 1600}
			maxHeight={'100%'}
			marginX='auto'
			marginTop={theme.spacing(-13)}
			zIndex={9}
			sx={{
				overflowY: 'hidden',
				overflowX: 'hidden',
			}}
			position='relative'
			boxShadow={theme.shadows[10]}

		>
			<Box
				className='mainContentArea'
				width='100%'
				height='100%'
				display='flex'
				position='relative'
				overflow='hidden'
				sx={{
					transition: 'all 0.3s ease-in-out',
				}}
			>
				<Box
					className='sideLeft'
					display='flex'
					flexDirection='column'
					width='100%'
					height='100%'
					maxWidth={theme.spacing(60)}
					position='relative'
				>
					<UserContentArea toggleShowNewContactList={handleShowNewContactList} />
					<Box
						className='chatListArea'
						flex='1'
						component={Paper}
						elevation={0}
						borderRadius={theme.spacing(0)}
						borderRight={`1px solid ${theme.palette.divider}`}
						bgcolor={theme.palette.background.default}
						paddingTop='2.6rem'
						sx={{
							overflowY: 'auto',
							'&::-webkit-scrollbar': {
								width: '.4rem',
								height: '.4rem',
							},
							'&::-webkit-scrollbar-thumb': {
								backgroundColor: theme.palette.background.paper,
							}
						}}
					>
						<SearchInputChat
							onClick={handleOrderChatByName}
							value={searchValue}
							onChange={(e) => setSearchValue(e.target.value)}
							handleClearSearch={() => setSearchValue('')}
						/>
						{searchValue.length > 0 ?
							filteredChatListItem.map((item: ChatListProps, index: number) => (
								<ChatListItem
									key={item.chatId}
									data={item}
									active={item.chatId === activeChat?.chatId}
									onClick={() => handleSetActiveChat(filteredChatListItem, index)}
								/>
							)) :
							chatListItem.map((item: ChatListProps, index: number) => (
								<ChatListItem
									key={item.chatId}
									data={item}
									active={item.chatId === activeChat?.chatId}
									onClick={() => handleSetActiveChat(chatListItem, index)}
								/>
							))}
					</Box>
					<UserProfileInfo />
					<NewChatList
						showContactList={showNewContactList}
						hideContactList={handleShowNewContactList}
						value={searchValue}
						onChange={(e) => setSearchValue(e.target.value)}
						handleClearSearch={() => setSearchValue('')}
						filteredData={filteredChatListItem}
					/>

				</Box>
				{showChatArea && <ChatMessagesZone />}
				{!showChatArea && <Intro />}
				<ContactInfos />
			</Box>
		</Box>
	);
};
