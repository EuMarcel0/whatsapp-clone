import { Box, Paper, Typography, useTheme } from '@mui/material';
import { useChatListContext } from '../../../contexts/ChatlistContext';

export const ChatMessagesZone = () => {
	const theme = useTheme();
	const { activeChat } = useChatListContext();

	return (
		<Box
			className='sideRight'
			flex='1'
			gap={4}
			display='flex'
			flexDirection='column'
			height='100%'
			borderBottom={'5px solid #00A884'}
		>
			<Box
				height={theme.spacing(7.1)}
				component={Paper}
				elevation={0}
				display='flex'
				justifyContent='space-between'
				alignItems='center'
				paddingY={theme.spacing(1)}
				paddingX={theme.spacing(2)}
				borderRadius={theme.spacing(0)}
				borderLeft={`1px solid ${theme.palette.divider}`}
			>
				<Typography variant='body2' color='textPrimary' fontWeight={'400'}>{activeChat?.name}</Typography>
			</Box>
		</Box >
	);
};
