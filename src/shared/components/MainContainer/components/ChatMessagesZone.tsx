import { Box, Paper, Typography, useTheme } from '@mui/material';

export const ChatMessagesZone = () => {
	const theme = useTheme();

	return (
		<Box
			className='sideRight'
			flex='1'
			gap={4}
			display='flex'
			flexDirection='column'
			height='100%'
			position='relative'
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
			>
				<Typography variant='h5'>Header</Typography>
			</Box>
		</Box >
	);
};
