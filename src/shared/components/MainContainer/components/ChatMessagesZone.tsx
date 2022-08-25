import { useState } from 'react';

import { Box, CardMedia, Icon, IconButton, Input, Paper, Typography, useTheme } from '@mui/material';
import Picker from 'emoji-picker-react';

import LightChatBackground from '../../../../assets/images/bg_light.png';
import { useChatListContext } from '../../../contexts/ChatlistContext';
import DarkChatBackground from '../../../../assets/images/bg_dark.png';
import { MenuChatOptions } from './MenuChatOptions';
import { AppTooltip } from '../../AppTootip';


export const ChatMessagesZone = () => {
	const theme = useTheme();
	const { activeChat } = useChatListContext();
	const [showEmojiPicker, setShowEmojiPicker] = useState(false);
	const [inputMessageValue, setInputMessageValue] = useState<string>('');

	const handleEmojiClick = (_: any, emojiObject: any) => {
		if (emojiObject.emoji) {
			setInputMessageValue(inputMessageValue + emojiObject.emoji);
		}
	};

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
				padding={theme.spacing(2)}
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
						width: '100%',
						zIndex: -1,
					}}
				/>
				<Box paddingX={theme.spacing(11)}>
					<Box
						width='70%'
						component={Paper}
						elevation={0}
						padding={theme.spacing(1)}
					>
						Messages here
					</Box>
				</Box>
			</Box>
			<Box
				component={Paper}
				elevation={0}
			>
				<Picker
					disableSearchBar
					disableSkinTonePicker
					onEmojiClick={handleEmojiClick}
					pickerStyle={{
						height: showEmojiPicker ? theme.spacing(40) : '0',
						transition: 'height .3s ease-in-out',
					}}
				/>
			</Box>
			<Box
				className='chatMessagesZone--footerInputZone'
				display='flex'
				alignItems='center'
				justifyContent='center'
				gap={theme.spacing(1)}
				width='100%'
				height={theme.spacing(7.7)}
				component={Paper}
				elevation={0}
				borderRadius={theme.spacing(0)}
				paddingY={theme.spacing(0.5)}
				paddingX={theme.spacing(1)}
			>
				<Box display='flex' alignItems='center' justifyContent='center' width={theme.spacing(showEmojiPicker ? 13.7 : 11)} sx={{ transition: 'linear .1s' }} >
					{(showEmojiPicker &&
						<AppTooltip title='Fechar emojis'>
							<IconButton onClick={() => setShowEmojiPicker(!showEmojiPicker)} >
								<Icon sx={{ fontSize: '1.4rem' }}>close</Icon>
							</IconButton>
						</AppTooltip>
					)}
					<AppTooltip title='Emojis'>
						<IconButton onClick={() => setShowEmojiPicker(true)}>
							<Icon sx={{ fontSize: '1.4rem', color: showEmojiPicker ? theme.palette.primary.main : '' }}>sentiment_satisfied_alt_icon</Icon>
						</IconButton>
					</AppTooltip>
					<AppTooltip title='Anexar arquivo'>
						<IconButton>
							<Icon sx={{ fontSize: '1.4rem' }}>attach_file</Icon>
						</IconButton>
					</AppTooltip>
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
						paddingY={theme.spacing(2.6)}
					>
						<Input
							size='small'
							fullWidth
							placeholder='Digite uma mensagem'
							sx={{
								fontSize: '.9rem',
								paddingTop: theme.spacing(1),
								paddingBottom: theme.spacing(1),
								paddingLeft: theme.spacing(1.5),
								paddingRight: theme.spacing(1.5),
							}}
							onChange={(e) => setInputMessageValue(e.target.value)}
							value={inputMessageValue}
							autoFocus
						/>
						<AppTooltip title='Limpar'>
							<IconButton size='small' onClick={() => setInputMessageValue('')}>
								{(inputMessageValue.length > 0 && <Icon sx={{ fontSize: '1.2rem' }}>clear</Icon>)}
							</IconButton>
						</AppTooltip>
					</Box>
				</Box>
				<Box display='flex' alignItems='center' justifyContent='center' width={theme.spacing(7)}>
					<AppTooltip title='Toque para falar'>
						<IconButton>
							<Icon sx={{ fontSize: '1.4rem' }}>{inputMessageValue.length > 0 ? 'send' : 'mic'}</Icon>
						</IconButton>
					</AppTooltip>
				</Box>
			</Box>
		</Box >
	);
};
