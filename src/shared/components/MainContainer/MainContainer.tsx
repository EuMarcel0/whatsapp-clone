import { useCallback, useState } from 'react';

import { Avatar, Box, CardMedia, Icon, IconButton, Paper, Typography, useTheme } from '@mui/material';
import { ChatMessagesZone } from './components/ChatMessagesZone';
import { useChatListContext } from '../../contexts/ChatsContext';
import { MenuUserOptions } from './components/MenuUserOptions';
import { SearchInputChat } from './components/SearchInputChat';
import { useAuthContext } from '../../contexts/AuthContext';
import { ChatListProps } from '../../contexts/ChatsTypes';
import { ChatListItem } from './components/ChatListItem';
import { SvgIntroLogo } from './components/SvgIntroLogo';
import { NewChatList } from './components/NewChatList';
import { AppTooltip } from '../AppTootip/AppTootip';


export const MainContainer = () => {
	const theme = useTheme();
	const { showChatArea, chatListItem, activeChat, handleSetActiveChat } = useChatListContext();
	const [newChatListItem, setNewChatListItem] = useState<ChatListProps[]>(chatListItem);
	const [searchValue, setSearchValue] = useState('');
	const [showNewContactList, setShowNewContactList] = useState(false);
	const { login, users } = useAuthContext();

	const handleOrderChatByName = useCallback(() => {
		const newChatListItem = [...chatListItem];
		newChatListItem.sort((a, b) => (a.name > b.name ? 1 : -1));
		setNewChatListItem(newChatListItem);
		return newChatListItem;
	}, [newChatListItem]);

	const filteredChatListItem = searchValue.length > 0 ? chatListItem.filter(item => item.name.toLocaleLowerCase().includes(searchValue)) : [];

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
								<IconButton onClick={login}>
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
							newChatListItem.map((item: ChatListProps, index: number) => (
								<ChatListItem
									key={item.chatId}
									data={item}
									active={item.chatId === activeChat?.chatId}
									onClick={() => handleSetActiveChat(newChatListItem, index)}
								/>
							))}
					</Box>
					<NewChatList
						showContactList={showNewContactList}
						hideContactList={handleHideNewContactList}
						value={searchValue}
						onChange={(e) => setSearchValue(e.target.value)}
						handleClearSearch={() => setSearchValue('')}
					/>
				</Box>
				{showChatArea && <ChatMessagesZone />}
				{(!showChatArea &&
					<Box
						className='sideRight introArea'
						flex='1'
						gap={1}
						display='flex'
						flexDirection='column'
						alignItems='center'
						justifyContent='center'
						height='100%'
						component={Paper}
						elevation={0}
						borderRadius={theme.spacing(0)}
						position='relative'
						borderBottom={'5px solid #00A884'}
						padding={theme.spacing(2)}
					>
						<SvgIntroLogo />
						<Box display='flex' flexDirection='column' alignItems='center' justifyContent='center' gap={2}>
							<Typography variant='h5' component='h1' color='textPrimary' fontSize={'1.7rem'} fontWeight='200' marginTop={theme.spacing(3)}>
								WhatsApp Web
							</Typography>
							<Typography variant='caption' component='p' color='textSecondary' align='center'>
								Agora envie e receba mensagens sem manter seu telefone online.<br />Use o WhatsApp em até 4 dispositivos vinculados e 1 telefone ao mesmo tempo.
							</Typography>
							<hr style={{ width: '100%', borderColor: 'rgba(134,150,160,0.15)', marginTop: '.3rem' }} />
							<Box display='flex' alignItems='center' gap={2}>
								<Icon sx={{ fontSize: '1rem', }}>computer</Icon>
								<Typography variant='caption' component='p' color='textSecondary' align='center'>
									Faça chamadas da área de trabalho com o WhatsApp para Windows. <a href='https://www.whatsapp.com/download' target='blank' style={{ textDecoration: 'none', color: '#53bdeb', fontSize: 'inherit' }}>Clique aqui</a>
								</Typography>
							</Box>
							<Typography sx={{ fontSize: '.7rem', display: 'flex', alignItems: 'center', gap: '.4rem', position: 'absolute', bottom: '2rem' }} color='textSecondary'>
								<Icon sx={{ fontSize: '.8rem' }}>lock</Icon>
								<span style={{ fontSize: '.7rem' }}>End-to-end encrypted</span>
							</Typography>
						</Box>
					</Box>
				)}
			</Box>
		</Box>
	);
};
