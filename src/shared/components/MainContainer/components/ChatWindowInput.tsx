import { useCallback } from 'react';

import { Box, Icon, IconButton, Input, useTheme } from '@mui/material';
import { useChatListContext } from '../../../contexts/Chats-Context/ChatsContext';
import { useAuthContext } from '../../../contexts/Auth-Context/AuthContext';
import { AppTooltip } from '../../AppTootip/AppTootip';
import { Api } from '../../../services/Api/Api';

interface ChatWindowInputProps {
	value: string;
	onChange: (e: any) => void;
	speechRecognition: () => void;
	setInputMessageValue: (value: string) => void;
	setShowEmojiPicker: (value: boolean) => void;
	isRecording: boolean;
}

export const ChatWindowInput = ({ value, onChange, speechRecognition, setInputMessageValue, setShowEmojiPicker, isRecording }: ChatWindowInputProps) => {
	const theme = useTheme();
	const { activeChat, usersInChat } = useChatListContext();
	const { users } = useAuthContext();

	const handleKeyUp = (e: any) => {
		if (e.key === 'Enter' || e.key === 'NumpadEnter') {
			handleSendMessage();
		}
	};

	const handleSendMessage = useCallback(() => {
		if (value !== '') {
			Api.sendMessage(activeChat, users.uid, 'text', value, usersInChat);
			setInputMessageValue('');
			setShowEmojiPicker(false);
		}
	}, [value]);

	return (
		<>
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
						onChange={onChange}
						value={value}
						onKeyDown={handleKeyUp}
					/>
					<AppTooltip title='Limpar'>
						<IconButton size='small' onClick={() => setInputMessageValue('')}>
							{(value && value.length > 0 && <Icon sx={{ fontSize: '1.2rem' }}>clear</Icon>)}
						</IconButton>
					</AppTooltip>
				</Box>
			</Box>
			<Box display='flex' alignItems='center' justifyContent='center' width={theme.spacing(7)}>
				{(value?.length === 0 &&
					<AppTooltip title='Toque para falar'>
						<IconButton onClick={speechRecognition}>
							<Icon sx={{ fontSize: '1.4rem', color: isRecording ? '#FF4E44' : '' }}>mic</Icon>
						</IconButton>
					</AppTooltip>
				)}
				{(value && value.length > 0 &&
					<AppTooltip title='Enviar'>
						<IconButton onClick={handleSendMessage}>
							<Icon sx={{ fontSize: '1.4rem' }}>send</Icon>
						</IconButton>
					</AppTooltip>
				)}
			</Box>
		</>
	);
};
