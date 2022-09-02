import { useEffect, useState } from 'react';
import { Box, CardMedia, Typography, useTheme } from '@mui/material';
import { useChatListContext } from '../../../contexts/ChatsContext';
import { ChatListProps } from '../../../contexts/ChatsTypes';
import { AppTooltip } from '../../AppTootip/AppTootip';
interface ChatListItemProps {
	data: ChatListProps;
	onClick: () => void;
	active: boolean;
}
export const ChatListItem = ({ data, onClick, active }: ChatListItemProps) => {
	const theme = useTheme();
	const { showChatArea, chat } = useChatListContext();
	const [date, setDate] = useState('');

	useEffect(() => {
		if (data.lastMessageDate) {
			const date = new Date(data.lastMessageDate.seconds * 1000);
			const hours = date.getHours();
			const minutes = date.getMinutes();
			hours < 10 ? '0' + hours : hours;
			minutes < 10 ? '0' + minutes : minutes;
			setDate(`${hours}:${minutes}`);
		}
	}, [date]);

	return (
		<Box
			className={active && showChatArea ? 'active' : ''}
			display='flex'
			alignItems='center'
			gap={theme.spacing(2)}
			paddingX={theme.spacing(2)}
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
			onClick={onClick}
		>
			<Box height='100%' >
				<AppTooltip title={data.title}>
					<CardMedia
						component='img'
						src={data.image}
						alt='foto_perfil'
						sx={{
							width: theme.spacing(6),
							height: '100%',
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
				borderBottom={'1px solid ' + theme.palette.action.hover}
			>
				<Box display='flex' alignItems='center' justifyContent='space-between'>
					<Typography variant='subtitle1' color='textPrimary' fontWeight={'400'}>{data.title}</Typography>
					<Typography variant='body2' color='textSecondary' sx={{ fontSize: '.8rem' }}>{date}</Typography>
				</Box>
				<Box display='flex' alignItems='center' >
					<Typography
						variant='body2'
						color='textSecondary'
						overflow='hidden'
						whiteSpace='nowrap'
						textOverflow='ellipsis'
						sx={{ fontSize: '.7rem' }}
					>
						Last Message
					</Typography>
				</Box>
			</Box>
		</Box>
	);
};
