import { useCallback, useState } from 'react';

import { Box, CardMedia, Icon, IconButton, Typography, useTheme } from '@mui/material';
import { shade } from 'polished';

import { useChatListContext } from '../../../contexts/ChatsContext';
import { useAuthContext } from '../../../contexts/AuthContext';
import { SearchInputContact } from './SearchInputContact';
import { AppTooltip } from '../../AppTootip/AppTootip';
import { Api } from '../../../services/Api/Api';
import { Users } from '../../../Types/Types';
import { ChatListProps } from '../../../contexts/ChatsTypes';

interface NewChatListProps {
	showContactList: boolean;
	hideContactList: () => void;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	handleClearSearch: () => void;
	filteredData: ChatListProps[];
	searchValue: string;
}

export const NewChatList = ({ showContactList, hideContactList, value, onChange, handleClearSearch, filteredData, searchValue }: NewChatListProps) => {
	const theme = useTheme();
	const { newContact } = useChatListContext();
	const { users } = useAuthContext();
	const [copyNewContactListItem, setCopyNewContactListItem] = useState<Users[]>(newContact);

	const handleOrderContacts = useCallback(() => {
		const copyNewContactList = [...newContact];
		copyNewContactList.sort((a, b) => (a.name > b.name ? 1 : -1));
		setCopyNewContactListItem(copyNewContactList);
		return copyNewContactList;
	}, [users, newContact]);

	const filteredContactList = value.length > 0 ? newContact.filter(item => item.name.toLocaleLowerCase().includes(value)) : [];

	const handleAddNewChat = useCallback(async (user2: any) => {
		await Api.addNewChat(users, user2);
		hideContactList();
	}, [users]);

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
					onClick={handleOrderContacts}
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
							<Box
								key={index}
								paddingX={theme.spacing(2.8)}
								display='flex'
								alignItems='center'
								height={theme.spacing(9)}
								gap={2}
								sx={{
									cursor: 'pointer',
									':hover': {
										backgroundColor: theme.palette.action.hover,
									},
									'&.active': {
										backgroundColor: theme.palette.info.main,
									},
									'&.inactive': {
										backgroundColor: 'transparent',
									}
								}}
								onClick={() => handleAddNewChat(contact)}
							>
								<Box
									className='avatar'
									height='100%'
									display='flex'
									alignItems='center'
								>
									<CardMedia
										component='img'
										src={contact.avatar}
										sx={{
											width: theme.spacing(6.1),
											height: theme.spacing(6.1),
											borderRadius: '50%',
										}}
									/>
								</Box>
								<Box width='100%' height='100%' borderBottom={'1px solid ' + theme.palette.action.hover} >
									<Box height='100%' display='flex' alignItems='center' justifyContent='space-between'>
										<Typography variant='subtitle1' color='textPrimary' fontWeight={'400'}>{contact.name}</Typography>
									</Box>
								</Box>
							</Box>
						))}
					</Box>
				) : (
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
						{newContact.map((contact, index) => (
							<Box
								key={index}
								paddingX={theme.spacing(2.8)}
								display='flex'
								alignItems='center'
								height={theme.spacing(9)}
								gap={2}
								sx={{
									cursor: 'pointer',
									':hover': {
										backgroundColor: theme.palette.action.hover,
									},
									'&.active': {
										backgroundColor: theme.palette.info.main,
									},
									'&.inactive': {
										backgroundColor: 'transparent',
									}
								}}
								onClick={() => handleAddNewChat(contact)}
							>
								<Box
									className='avatar'
									height='100%'
									display='flex'
									alignItems='center'
								>
									<CardMedia
										component='img'
										src={contact.avatar}
										sx={{
											width: theme.spacing(6.1),
											height: theme.spacing(6.1),
											borderRadius: '50%',
										}}
									/>
								</Box>
								<Box width='100%' height='100%' borderBottom={'1px solid ' + theme.palette.action.hover} >
									<Box height='100%' display='flex' alignItems='center' justifyContent='space-between'>
										<Typography variant='subtitle1' color='textPrimary' fontWeight={'400'}>{contact.name}</Typography>
									</Box>
								</Box>
							</Box>
						))}
					</Box>
				)}
			</Box>
		</Box>
	);
};
