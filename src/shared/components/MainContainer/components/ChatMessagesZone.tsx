import { memo, useCallback, useEffect, useRef, useState } from 'react';

import { Box, CardMedia, Icon, IconButton, Paper, Typography, useTheme } from '@mui/material';
import Picker from 'emoji-picker-react';

import { useChatListContext } from '../../../contexts/Chats-Context/ChatsContext';
import LightChatBackground from '../../../../assets/images/bg_light.png';
import DarkChatBackground from '../../../../assets/images/bg_dark.png';
import { MenuChatZoneOptions } from './MenuChatZoneOptions';
import { AppTooltip } from '../../AppTootip/AppTootip';
import { ChatWindowInput } from './ChatWindowInput';
import ChatWindow from './ChatWindow';


const ChatMessagesZone = () => {
	const theme = useTheme();
	const { activeChat, chat, showContactInfos, handleShowChatArea, toggleShowContactInfos } = useChatListContext();
	const [showEmojiPicker, setShowEmojiPicker] = useState(false);
	const [inputMessageValue, setInputMessageValue] = useState('');
	const [isRecording, setIsRecording] = useState(false);
	const chatRef = useRef<HTMLDivElement>(null);

	const handleSpeechRecognition = useCallback(() => {
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
	}, []);

	const handleEmojiClick = (_: any, emojiObject: any) => {
		if (emojiObject.emoji) {
			setInputMessageValue(inputMessageValue + emojiObject.emoji);
		}
	};
	/**
	 * Scroll to bottom when new message is sent
	 */
	useEffect(() => {
		if (chatRef.current?.scrollHeight ?
			chatRef.current?.scrollHeight > chatRef.current!.offsetHeight : undefined) {
			chatRef.current?.scrollHeight ?
				chatRef.current.scrollTop = chatRef.current!.scrollHeight - chatRef.current!.offsetHeight : undefined;
		}
	}, [chat]);

	return (
		<Box
			className='sideRight'
			flex={showContactInfos ? '' : '1'}
			display='flex'
			flexDirection='column'
			height='100%'
			width={theme.spacing(80)}
			sx={{
				transition: 'linear .5s',
			}}
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
					<AppTooltip title='Infos'>
						<CardMedia
							onClick={toggleShowContactInfos}
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
				ref={chatRef}
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
						backgroundColor: '#5757571e'
					}
				}}
			>
				{chat.map((item, index) => (
					<ChatWindow message={item} key={index} />
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
				<ChatWindowInput
					value={inputMessageValue}
					onChange={(e) => setInputMessageValue(e.target.value)}
					speechRecognition={handleSpeechRecognition}
					isRecording={isRecording}
					setInputMessageValue={setInputMessageValue}
					setShowEmojiPicker={setShowEmojiPicker}
				/>
			</Box>
		</Box >
	);
};

export default memo(ChatMessagesZone);
