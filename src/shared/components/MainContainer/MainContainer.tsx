import { useState } from 'react';

import { Avatar, Box, CardMedia, Icon, IconButton, Paper, useTheme } from '@mui/material';
import ChatMessagesZone from './components/ChatMessagesZone';
import { useChatListContext } from '../../contexts/ChatsContext';
import { MenuUserOptions } from './components/MenuUserOptions';
import { SearchInputChat } from './components/SearchInputChat';
import { useAuthContext } from '../../contexts/AuthContext';
import { ChatListProps } from '../../contexts/ChatsTypes';
import { ChatListItem } from './components/ChatListItem';
import { NewChatList } from './components/NewChatList';
import { AppTooltip } from '../AppTootip/AppTootip';
import { Intro } from './components/Intro';


export const MainContainer = () => {
	const theme = useTheme();
	const { showChatArea, chatListItem, activeChat, handleSetActiveChat } = useChatListContext();
	const [newChatListItem, setNewChatListItem] = useState<ChatListProps[]>(chatListItem);
	const [searchValue, setSearchValue] = useState('');
	const [showNewContactList, setShowNewContactList] = useState(false);
	const { users } = useAuthContext();

	const handleOrderChatByName = () => {
		if (chatListItem.length > 0) {
			const newChatListItem = chatListItem.sort((a, b) => {
				return a.title.localeCompare(b.title);
			});
			setNewChatListItem(newChatListItem);
		}
	};

	const filteredChatListItem: ChatListProps[] = searchValue.length > 0 ? chatListItem.filter(item => item.title.toLocaleLowerCase().includes(searchValue)) : chatListItem;

	const handleShowContactsList = () => {
		setShowNewContactList(true);
	};
	const handleHideNewContactList = () => {
		setShowNewContactList(false);
	};

	return (
		<Box
			width='100%'
			height='98%'
			maxWidth={1600}
			marginX='auto'
			marginTop={theme.spacing(-13)}
			zIndex={9}
			sx={{
				overflowY: 'hidden',
			}}
			position='relative'
		>
			<Box className='mainContentArea' width='100%' height='100%' display='flex'>
				<Box
					className='sideLeft'
					display='flex'
					flexDirection='column'
					width='100%'
					height='100%'
					maxWidth={theme.spacing(60)}
					position='relative'
				>
					<Box
						className='userContentArea'
						height={theme.spacing(7)}
						component={Paper}
						elevation={0}
						display='flex'
						justifyContent='space-between'
						alignItems='center'
						paddingY={theme.spacing(1)}
						paddingX={theme.spacing(2)}
						borderRadius={theme.spacing(0)}
						borderRight={`1px solid ${theme.palette.divider}`}
					>
						<AppTooltip title={users.displayName ? users.displayName : ''}>
							<Avatar sx={{ cursor: 'pointer' }}>
								<CardMedia component='img' src={users.photoURL ? users.photoURL : ''} />
							</Avatar>
						</AppTooltip>
						<Box display='flex' alignItems='center' justifyContent='center' gap={1}>
							<AppTooltip title='Ver status'>
								<IconButton>
									<Icon sx={{ fontSize: '1.4rem' }}>data_saver_off</Icon>
								</IconButton>
							</AppTooltip>
							<AppTooltip title='Novo chat'>
								<IconButton onClick={handleShowContactsList}>
									<Icon sx={{ fontSize: '1.4rem' }}>chat</Icon>
								</IconButton>
							</AppTooltip>
							<MenuUserOptions />
						</Box>
					</Box>

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
					<NewChatList
						showContactList={showNewContactList}
						hideContactList={handleHideNewContactList}
						value={searchValue}
						onChange={(e) => setSearchValue(e.target.value)}
						handleClearSearch={() => setSearchValue('')}
						filteredData={filteredChatListItem}
						searchValue={searchValue}
					/>
				</Box>
				{showChatArea && <ChatMessagesZone />}
				{!showChatArea && <Intro />}
			</Box>
		</Box>
	);
};
