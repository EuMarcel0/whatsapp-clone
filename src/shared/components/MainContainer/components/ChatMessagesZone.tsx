import { Box, CardMedia, Icon, IconButton, Input, Paper, Typography, useTheme } from '@mui/material';
import { shade } from 'polished';
import LightChatBackground from '../../../../assets/images/bg_light.png';
import { useChatListContext } from '../../../contexts/ChatlistContext';
import DarkChatBackground from '../../../../assets/images/bg_dark.png';
import { MenuChatOptions } from './MenuChatOptions';
import { AppTooltip } from '../../AppTootip';


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
		>
			<Box
				className='chatMessagesZone--headerZone'
				height={theme.spacing(theme.palette.background.default === '#0A1014' ? 7.1 : 7)}
				component={Paper}
				elevation={0}
				display='flex'
				justifyContent='space-between'
				alignItems='center'
				paddingY={theme.spacing(1.3)}
				paddingX={theme.spacing(2)}
				borderRadius={theme.spacing(0)}
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
				className='chatMessagesZone--messagesZone'
				flex='1'
				position='relative'
				sx={{
					overflowX: 'hidden',
					overflowY: 'auto',
					'&::-webkit-scrollbar': {
						width: '.4rem',
						height: '.4rem',
					},
					'&::-webkit-scrollbar-thumb': {
						backgroundColor: theme.palette.background.paper,
					}
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
			<Box
				className='chatMessagesZone--footerInputZone'
				display='flex'
				alignItems='center'
				justifyContent='center'
				width='100%'
				height={theme.spacing(7.7)}
				component={Paper}
				elevation={0}
				borderRadius={theme.spacing(0)}
				paddingY={theme.spacing(1.3)}
				paddingX={theme.spacing(2)}
			>
				<Box width={theme.spacing(11.7)}>
					Icons left
				</Box>
				<Box flex='1'>
					<Box
						flex='1'
						display='flex'
						alignItems='center'
						justifyContent='start'
						bgcolor={theme.palette.info.light}
						height={theme.spacing(4)}
						borderRadius={theme.spacing(1)}
						paddingX={theme.spacing(1)}
						paddingY={theme.spacing(1)}
					>
						<Input
							size='small'
							fullWidth
							placeholder='Digite uma mensagem'
							sx={{ fontSize: '.8rem' }}
						/>
					</Box>
				</Box>
				<Box width={theme.spacing(7)}>
					Icons right
				</Box>
			</Box>
		</Box >
	);
};
