import React, { useState, useMemo } from 'react';
import { Box, Typography, useTheme, Paper } from '@mui/material';
import { useAuthContext } from '../../../contexts/AuthContext';
import { Message } from '../../../Types/Types';

interface ChatWindowProps {
	message: Message;
}

export const ChatWindow = ({ message }: ChatWindowProps) => {
	const theme = useTheme();
	const { users } = useAuthContext();
	const [date, setDate] = useState('');

	const messageDate = useMemo(() => {
		if (message.date) {
			const newDate = new Date(message.date.seconds * 1000);
			const hours = newDate.getHours();
			const minutes = newDate.getMinutes();
			hours < 10 ? '0' + hours : hours;
			minutes < 10 ? '0' + minutes : minutes;
			setDate(`${hours}:${minutes}`);
		}
	}, [message.date]);

	return (
		<Box
			display='flex'
			justifyContent={users.uid === message.author ? 'flex-end' : 'flex-start'}
			paddingX={theme.spacing(10)}
		>
			<Box
				component={Paper}
				display='flex'
				maxWidth='70%'
				position='relative'
				elevation={0}
				padding={theme.spacing(1.5)}
				marginBottom={theme.spacing(.5)}
			>
				<Box
					display='flex'
					sx={{
						'&::before': {
							content: '""',
							position: 'absolute',
							top: '2px',
							left: users.uid === message.author ? '' : '-0.3rem',
							right: users.uid === message.author ? '-0.3rem' : '',
							width: '.4rem',
							height: '.7rem',
							backgroundColor: theme.palette.background.paper,
							clipPath: users.uid === message.author ? 'polygon(100% 0, 0 0, 0 100%)' : 'polygon(0 0, 100% 100%, 100% 1%)',

						}
					}}
				>
				</Box>
				<Box
					marginRight={theme.spacing(1)}
				>
					<Typography variant='body2' color='textPrimary' fontWeight={'400'} sx={{ fontSize: '.7rem' }}>
						{message.body}
					</Typography>
				</Box>
				<Box
					marginLeft={theme.spacing(1)}
					marginRight='-7px'
					display='flex'
					alignItems='center'
					justifyContent='flex-end'
				>
					<Typography variant='caption' color='textSecondary' fontWeight={'200'} sx={{ fontSize: '.6rem', mb: '-20px' }}>
						{date}
					</Typography>
				</Box>
			</Box>
		</Box>
	);
};
