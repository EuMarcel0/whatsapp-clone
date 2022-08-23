import { Box, CardMedia, Icon, IconButton, Paper, Typography, useTheme } from '@mui/material';
import { useChatListContext } from '../../../contexts/ChatlistContext';
import { AppTooltip } from '../../AppTootip';

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
				className='chatMessagesZone--headerBar'
				height={theme.spacing(7.1)}
				component={Paper}
				elevation={0}
				display='flex'
				justifyContent='space-between'
				alignItems='center'
				paddingY={theme.spacing(1.3)}
				paddingX={theme.spacing(2)}
				borderRadius={theme.spacing(0)}
				borderLeft={`1px solid ${theme.palette.divider}`}
			>
				<Box
					display='flex'
					alignItems='center'
					justifyContent='flex-start'
					gap={theme.spacing(2)}
				>
					<AppTooltip title='Ver foto'>
						<CardMedia
							component='img'
							src={activeChat?.image}
							sx={{
								width: theme.spacing(5),
								height: theme.spacing(5),
								borderRadius: '50%',
								cursor: 'pointer',
							}}
						/>
					</AppTooltip>
					<Typography variant='body2' color='textPrimary' fontWeight={'400'}>{activeChat?.name}</Typography>
				</Box>
				<Box display='flex' alignItems='center'>
					<AppTooltip title='Pesquisar conversa'>
						<IconButton>
							<Icon>search</Icon>
						</IconButton>
					</AppTooltip>
					<AppTooltip title='Pesquisar conversa'>
						<IconButton>
							<Icon>more_vert_icon</Icon>
						</IconButton>
					</AppTooltip>
				</Box>
			</Box>
		</Box >
	);
};
