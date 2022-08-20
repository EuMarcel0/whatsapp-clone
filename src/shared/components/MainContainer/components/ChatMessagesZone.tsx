import { Box } from '@mui/material';

export const ChatMessagesZone = () => {
	return (
		<Box
			className='sideRight'
			flex='1'
			gap={4}
			display='flex'
			flexDirection='column'
			alignItems='center'
			justifyContent='center'
			height='100%'
			position='relative'
			borderBottom={'5px solid #00A884'}
		>
			Chat zone
		</Box >
	);
};
