import { useCallback, useState } from 'react';

import { Box, CardMedia, Icon, IconButton, Input, Paper, Typography, useTheme } from '@mui/material';
import Picker from 'emoji-picker-react';

import LightChatBackground from '../../../../assets/images/bg_light.png';
import DarkChatBackground from '../../../../assets/images/bg_dark.png';
import { useChatListContext } from '../../../contexts/ChatsContext';
import { useAuthContext } from '../../../contexts/AuthContext';
import { MenuChatZoneOptions } from './MenuChatZoneOptions';
import { AppTooltip } from '../../AppTootip/AppTootip';
import { Api } from '../../../services/Api/Api';


export const ChatMessagesZone = () => {
	const theme = useTheme();
	const { activeChat, chat, handleShowChatArea } = useChatListContext();
	const { users } = useAuthContext();
	const [showEmojiPicker, setShowEmojiPicker] = useState(false);
	const [inputMessageValue, setInputMessageValue] = useState<string>('');
	const [isRecording, setIsRecording] = useState(false);


	const handleSpeechRecognition = () => {
		const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
		const recognition = SpeechRecognition ? new SpeechRecognition() : null;

		if (!recognition) return;

		recognition.lang = 'pt_br';
		recognition.onstart = () => {
			setIsRecording(true);
		};
		recognition.onend = () => {
			setIsRecording(false);
		};
		recognition.onresult = (e: any) => {
			const current = e.resultIndex;
			const transcript = e.results[current][0].transcript;
			setInputMessageValue(transcript);
		};
		recognition.start();
	};

	const handleEmojiClick = (_: any, emojiObject: any) => {
		if (emojiObject.emoji) {
			setInputMessageValue(inputMessageValue + emojiObject.emoji);
		}
	};

	const handleKeyUp = (e: any) => {
		if (e.key === 'Enter' || e.key === 'NumpadEnter') {
			handleSendMessage();
		}
	};

	const handleSendMessage = useCallback(() => {
		if (inputMessageValue !== '') {
			Api.sendMessage(activeChat, users.uid, 'text', inputMessageValue);
			setInputMessageValue('');
			setShowEmojiPicker(false);
		}
	}, [inputMessageValue]);

	console.log('chat', chat);

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
					<Typography variant='body2' color='textPrimary' fontWeight={'400'}>{activeChat?.title}</Typography>
				</Box>
				<Box display='flex' alignItems='center'>
					<AppTooltip title='Pesquisar conversa'>
						<IconButton>
							<Icon>search</Icon>
						</IconButton>
					</AppTooltip>
					<MenuChatZoneOptions closeChat={handleShowChatArea} />
				</Box>
			</Box>
			<Box
				className='chatMessagesZone--messagesZone'
				flex='1'
				position='relative'
				padding={theme.spacing(2)}
				sx={{
					backgroundImage: `url(${theme.palette.background.default === '#0A1014' ? DarkChatBackground : LightChatBackground})`,
					backgroundRepeat: 'repeat',
					backgroundSize: 'cover',
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
				{chat.map((item, index) => (
					<Box
						key={index}
						display='flex'
						justifyContent={users.uid === item.author ? 'flex-end' : 'flex-start'}
						paddingX={theme.spacing(10)}
					>
						<Box
							component={Paper}
							display='flex'
							maxWidth='70%'
							position='relative'
							elevation={0}
							padding={theme.spacing(1.5)}
							marginBottom={theme.spacing(.5)}
						>
							<Box
								display='flex'
								sx={{
									'&::before': {
										content: '""',
										position: 'absolute',
										top: '2px',
										left: users.uid === item.author ? '' : '-0.3rem',
										right: users.uid === item.author ? '-0.3rem' : '',
										width: '.4rem',
										height: '.7rem',
										backgroundColor: theme.palette.background.paper,
										clipPath: users.uid === item.author ? 'polygon(100% 0, 0 0, 0 100%)' : 'polygon(0 0, 100% 100%, 100% 1%)',

									}
								}}
							>
							</Box>
							<Box
								marginRight={theme.spacing(1)}
							>
								<Typography variant='body2' color='textPrimary' fontWeight={'400'} sx={{ fontSize: '.7rem' }}>
									{item.body}
								</Typography>
							</Box>
							<Box
								marginLeft={theme.spacing(1)}
								marginRight='-7px'
								display='flex'
								alignItems='center'
								justifyContent='flex-end'
							>
								<Typography variant='caption' color='textSecondary' fontWeight={'200'} sx={{ fontSize: '.6rem', mb: '-20px' }}>
									22:00
								</Typography>
							</Box>
						</Box>
					</Box>
				))}
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
							onKeyDown={handleKeyUp}
						/>
						<AppTooltip title='Limpar'>
							<IconButton size='small' onClick={() => setInputMessageValue('')}>
								{(inputMessageValue.length > 0 && <Icon sx={{ fontSize: '1.2rem' }}>clear</Icon>)}
							</IconButton>
						</AppTooltip>
					</Box>
				</Box>
				<Box display='flex' alignItems='center' justifyContent='center' width={theme.spacing(7)}>
					{(inputMessageValue.length === 0 &&
						<AppTooltip title='Toque para falar'>
							<IconButton onClick={handleSpeechRecognition}>
								<Icon sx={{ fontSize: '1.4rem', color: isRecording ? '#FF4E44' : '' }}>mic</Icon>
							</IconButton>
						</AppTooltip>
					)}
					{(inputMessageValue.length > 0 &&
						<AppTooltip title='Enviar'>
							<IconButton onClick={handleSendMessage}>
								<Icon sx={{ fontSize: '1.4rem' }}>send</Icon>
							</IconButton>
						</AppTooltip>
					)}
				</Box>
			</Box>
		</Box >
	);
};
