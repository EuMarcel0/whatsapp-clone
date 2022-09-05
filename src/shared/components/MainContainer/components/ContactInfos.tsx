import { Box, useTheme } from '@mui/material';
import { useChatListContext } from '../../../contexts/ChatsContext';

export const ContactInfos = () => {
	const theme = useTheme();
	const { showContactInfos } = useChatListContext();


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
			bottom={0}
			right={showContactInfos ? 0 : '-480px'}
			sx={{
				transition: 'linear .2s',
			}}
		>

		</Box>
	);
};
