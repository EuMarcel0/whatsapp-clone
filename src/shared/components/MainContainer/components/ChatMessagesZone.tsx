import { Box, CardMedia, Icon, IconButton, Paper, Typography, useTheme } from '@mui/material';
import { useChatListContext } from '../../../contexts/ChatlistContext';
import { AppTooltip } from '../../AppTootip';
import { MenuChatOptions } from './MenuChatOptions';
import DarkChatBackground from '../../../../assets/images/bg_dark.png';
import LightChatBackground from '../../../../assets/images/bg_light.png';

export const ChatMessagesZone = () => {
	const theme = useTheme();
	const { activeChat } = useChatListContext();

	return (
		<Box
			className='sideRight'
			flex='1'
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
					<MenuChatOptions />
				</Box>
			</Box>
			<Box
				className='chatsArea'
				flex='1'
				position='relative'
				sx={{
					overflowX: 'hidden',
					overflowY: 'auto',
				}}
			>
				<img
					src={theme.palette.background.default === '#0A1014' ? DarkChatBackground : LightChatBackground}
					style={{
						position: 'absolute',
						top: '0',
						left: '0',
						right: '0',
						height: '100%',
					}}
				/>
			</Box>
		</Box >
	);
};
