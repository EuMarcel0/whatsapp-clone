import { useCallback } from 'react';

import { Box, Icon, IconButton, Typography, useTheme } from '@mui/material';
import { shade } from 'polished';

import { useChatListContext } from '../../../contexts/Chats-Context/ChatsContext';
import { useAuthContext } from '../../../contexts/Auth-Context/AuthContext';
import { ChatListProps } from '../../../contexts/Chats-Context/ChatsTypes';
import { SearchInputContact } from './SearchInputContact';
import { AppTooltip } from '../../AppTootip/AppTootip';
import { NewChatListItem } from './NewChatListItem';
import { Api } from '../../../services/Api/Api';

interface NewChatListProps {
	showContactList: boolean;
	hideContactList: () => void;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	handleClearSearch: () => void;
	filteredData: ChatListProps[];
}

export const NewChatList = ({ showContactList, hideContactList, value, onChange, handleClearSearch, filteredData }: NewChatListProps) => {
	const theme = useTheme();
	const { newContact } = useChatListContext();
	const { users } = useAuthContext();

	const filteredContactList = value.length > 0 ? newContact.filter(item => item.name.toLocaleLowerCase().includes(value)) : [];

	const handleAddNewChat = async (user2: any) => {
		await Api.addNewChat(users, user2);
		hideContactList();
	};


	return (
		<Box
			className='newContactList'
			display='flex'
			flexDirection='column'
			position='absolute'
			width='100%'
			maxWidth='480px'
			bgcolor={theme.palette.background.default}
			top={0}
			left={showContactList ? 0 : '-480px'}
			bottom={0}
			right={0}
			sx={{
				transition: 'linear .3s',
			}}
		>
			<Box
				className='header'
				bgcolor={theme.palette.mode === 'light' ? shade(.2, theme.palette.primary.main) : theme.palette.background.paper}
				paddingTop={theme.spacing(7)}
				paddingX={theme.spacing(2.8)}
				paddingBottom={theme.spacing(.8)}
				display='flex'
				alignItems='center'
				gap={2}
				position='relative'
				borderRight={`1px solid ${theme.palette.divider}`}
			>
				<AppTooltip title='Voltar'>
					<IconButton onClick={hideContactList}>
						<Icon sx={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#FFF' }}>arrow_back</Icon>
					</IconButton>
				</AppTooltip>
				<Typography fontWeight='bold' fontSize='1rem' sx={{ color: '#FFF' }}>Novo chat</Typography>
			</Box>
			<Box
				className='content'
				flex='1'
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
				<SearchInputContact
					value={value}
					onChange={onChange}
					handleClearSearch={handleClearSearch}
				/>
				{(
					newContact.length === 0 &&
					<Box
						height='90%'
						display='flex'
						flexDirection='column'
						justifyContent='center'
						alignItems='center'
					>
						<Typography variant='caption' color='textSecondary'>Nenhum contato</Typography>
					</Box>
				)}
				{value.length > 0 ? (
					<Box
						className='list'
						display='flex'
						flexDirection='column'
						justifyContent='flex-start'
						paddingTop={theme.spacing(5.5)}
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
						{filteredContactList.map((contact, index) => (
							<NewChatListItem
								key={index}
								contact={contact}
								onClick={() => handleAddNewChat(contact)}
							/>
						))}
					</Box>
				) : (
					<Box
						className='list'
						display='flex'
						flexDirection='column'
						justifyContent='flex-start'
						paddingTop={theme.spacing(6.8)}
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
						{newContact.map((contact, index) => (
							<NewChatListItem
								key={index}
								contact={contact}
								onClick={() => handleAddNewChat(contact)}
							/>
						))}
					</Box>
				)}
			</Box>
		</Box>
	);
};
