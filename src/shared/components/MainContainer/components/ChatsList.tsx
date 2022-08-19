import { Box, CardMedia, Paper, Typography, useTheme } from '@mui/material';
import { useState } from 'react';
import ChatAvatarImage from '../../../../assets/images/the_rock.jpg';

interface ChatListProps {
	image: string;
	name: string;
	lastMessage: string;
}

export const ChatsList = () => {
	const theme = useTheme();
	const [chat, setChat] = useState<ChatListProps[]>([
		{
			image: ChatAvatarImage,
			name: 'The Rock',
			lastMessage: 'Oi, tudo bem?',
		},
	]);

	return (
		<Box
			flex='1'
			component={Paper}
			borderRadius={theme.spacing(0)}
		>
			{chat.map((item, index) => (
				<Box key={index} paddingX={theme.spacing(2)} >
					<Box
						display='flex'
						alignItems='center'
						gap={theme.spacing(2)}
						height='100%'
						maxHeight={theme.spacing(9)}
					>
						<CardMedia
							component='img'
							src={item.image}
							alt='foto_perfil'
							sx={{
								width: theme.spacing(6),
								borderRadius: theme.spacing(3),

							}}
						/>
						<Box
							display='flex'
							flexDirection='column'
							width='100%'
							height='100%'
							paddingY={theme.spacing(2)}
							borderBottom={'1px solid ' + theme.palette.divider}
						>
							<Typography variant='body2' color='textPrimary'>{item.name}</Typography>
							<Typography variant='body2' color='textSecondary' sx={{ fontSize: '.7rem' }}>{item.lastMessage}</Typography>
						</Box>
					</Box>
				</Box>
			))}
		</Box>
	);
};
