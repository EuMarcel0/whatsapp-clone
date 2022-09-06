import { Box, Paper, useTheme, IconButton, Icon, Typography, CardMedia, Divider } from '@mui/material';
import { useChatListContext } from '../../../contexts/Chats-Context/ChatsContext';
import { AppTooltip } from '../../AppTootip/AppTootip';

export const ContactInfos = () => {
	const theme = useTheme();
	const { showContactInfos, activeChat, toggleShowContactInfos } = useChatListContext();


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
				transition: 'linear .3s',
			}}
		>
			<Box
				className='userContentArea'
				height={theme.spacing(theme.palette.background.default === '#0A1014' ? 7.1 : 7)}
				component={Paper}
				elevation={0}
				display='flex'
				justifyContent='space-between'
				alignItems='center'
				paddingY={theme.spacing(1)}
				paddingX={theme.spacing(2)}
				borderRadius={theme.spacing(0)}
				borderRight={`1px solid ${theme.palette.divider}`}
			>
				<Box display='flex' alignItems='center' gap={theme.spacing(3)}>
					<AppTooltip title='Fechar infos'>
						<IconButton
							onClick={toggleShowContactInfos}
						>
							<Icon sx={{ fontSize: '1.4rem' }}>close</Icon>
						</IconButton>
					</AppTooltip>
					<Typography variant='caption' color='text.primary'>Infomações do contato</Typography>
				</Box>
			</Box>
			<Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' flex='1'>
				<CardMedia
					component='img'
					src={activeChat?.image}
					sx={{
						width: theme.spacing(25),
						height: theme.spacing(25),
						borderRadius: '50%',
					}}
				/>
				<Typography variant='h6' color='text.primary' sx={{ mt: 2, borderBottom: '1px solid ' + theme.palette.action.hover }}>{activeChat?.title}</Typography>
			</Box>
		</Box>
	);
};
