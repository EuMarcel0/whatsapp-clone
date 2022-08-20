import { useCallback, useRef, useState } from 'react';

import { Box, CardMedia, Icon, Paper, Typography, useTheme } from '@mui/material';
import { useChatListItem } from '../../../contexts/ChatListItem';
import { ChatListProps } from '../../../contexts/ChatListTypes';
import { SearchInputChat } from './SearchInputChat';
import { AppTooltip } from '../../AppTootip';

interface PropsChatList {
	onClick: () => void;
	showMessage?: boolean;
}

export const ChatsList = ({ onClick, showMessage }: PropsChatList) => {
	const theme = useTheme();
	const { chatListItem } = useChatListItem();
	const [newChatListItem, setNewChatListItem] = useState<ChatListProps[]>(chatListItem);
	const [searchValue, setSearchValue] = useState('');

	const handleOrderChatByName = useCallback(() => {
		const newChatListItem = [...chatListItem];
		newChatListItem.sort((a, b) => (a.name > b.name ? 1 : -1));
		setNewChatListItem(newChatListItem);
		return newChatListItem;
	}, [newChatListItem]);


	const filteredChatListItem = searchValue.length > 0
		? chatListItem.filter(item => item.name.toLocaleLowerCase().includes(searchValue))
		: [];


	return (
		<Box
			flex='1'
			component={Paper}
			borderRadius={theme.spacing(0)}
			bgcolor={theme.palette.background.default}
			paddingTop='3rem'
			onClick={onClick}
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
			{searchValue.length > 0 ? (
				filteredChatListItem.map((item, index) => (
					<Box
						display='flex'
						alignItems='center'
						gap={theme.spacing(2)}
						key={index}
						paddingX={theme.spacing(2)}
						sx={{
							cursor: 'pointer',
							':hover': {
								backgroundColor: theme.palette.action.hover,
							}
						}}
					>
						<Box
							display='flex'
							alignItems='center'
							gap={theme.spacing(2)}
							height='100%'
							maxHeight={theme.spacing(9)}
							marginBottom={theme.spacing(4)}
						>
							<AppTooltip title={item.name}>
								<CardMedia
									component='img'
									src={item.image}
									alt='foto_perfil'
									sx={{
										width: theme.spacing(6),
										borderRadius: theme.spacing(3),
										cursor: 'pointer',
									}}
								/>
							</AppTooltip>
						</Box>
						<Box
							display='flex'
							flexDirection='column'
							width='100%'
							height='100%'
							overflow='hidden'
							textOverflow='ellipsis'
							whiteSpace='nowrap'
							paddingY={theme.spacing(1.5)}
							borderBottom={'.01rem solid ' + theme.palette.action.hover}
						>
							<Box display='flex' alignItems='center' justifyContent='space-between'>
								<Typography variant='subtitle1' color='textPrimary' fontWeight={'400'}>{item.name}</Typography>
								<Typography variant='body2' color='textSecondary' sx={{ fontSize: '.8rem' }}>{item.date}</Typography>
							</Box>
							<Box
								display='flex'
								alignItems='center'
							>
								<Icon sx={{ fontSize: '.9rem' }}>done</Icon>
								<AppTooltip title={item.lastMessage} >
									<Typography
										variant='body2'
										color='textSecondary'
										overflow='hidden'
										whiteSpace='nowrap'
										textOverflow='ellipsis'
										sx={{ fontSize: '.7rem' }}
									>
										{item.lastMessage}
									</Typography>
								</AppTooltip>
							</Box>
						</Box>
					</Box>
				))
			) : (
				newChatListItem.map((item, index) => (
					<Box
						display='flex'
						alignItems='center'
						gap={theme.spacing(2)}
						key={index}
						paddingX={theme.spacing(2)}
						sx={{
							cursor: 'pointer',
							':hover': {
								backgroundColor: theme.palette.action.hover,
							}
						}}
					>
						<Box
							display='flex'
							alignItems='center'
							gap={theme.spacing(2)}
							height='100%'
							maxHeight={theme.spacing(9)}
						>
							<AppTooltip title={item.name}>
								<CardMedia
									component='img'
									src={item.image}
									alt='foto_perfil'
									sx={{
										width: theme.spacing(6),
										borderRadius: theme.spacing(3),
										cursor: 'pointer',
									}}
								/>
							</AppTooltip>
						</Box>
						<Box
							display='flex'
							flexDirection='column'
							width='100%'
							height='100%'
							overflow='hidden'
							textOverflow='ellipsis'
							whiteSpace='nowrap'
							paddingY={theme.spacing(1.5)}
							borderBottom={'.01rem solid ' + theme.palette.action.hover}
						>
							<Box display='flex' alignItems='center' justifyContent='space-between'>
								<Typography variant='subtitle1' color='textPrimary' fontWeight={'400'}>{item.name}</Typography>
								<Typography variant='body2' color='textSecondary' sx={{ fontSize: '.8rem' }}>{item.date}</Typography>
							</Box>
							<Box
								display='flex'
								alignItems='center'
							>
								<Icon sx={{ fontSize: '.9rem' }}>done</Icon>
								<AppTooltip title={item.lastMessage} >
									<Typography
										variant='body2'
										color='textSecondary'
										overflow='hidden'
										whiteSpace='nowrap'
										textOverflow='ellipsis'
										sx={{ fontSize: '.7rem' }}
									>
										{item.lastMessage}
									</Typography>
								</AppTooltip>
							</Box>
						</Box>
					</Box>
				))
			)
			}
		</Box>
	);
};
