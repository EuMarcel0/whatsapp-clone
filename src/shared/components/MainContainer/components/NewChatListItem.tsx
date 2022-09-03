import { Box, CardMedia, Typography, useTheme } from '@mui/material';
import { Users } from '../../../Types/Types';

interface NewChatListItemProps {
	contact: Users;
	onClick: () => void;
}

export const NewChatListItem = ({ contact, onClick }: NewChatListItemProps) => {
	const theme = useTheme();

	return (
		<Box
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
			onClick={onClick}
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
	);
};
