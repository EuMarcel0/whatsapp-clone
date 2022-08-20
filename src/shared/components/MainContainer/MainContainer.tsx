import { useState } from 'react';

import { Avatar, Box, CardMedia, Icon, IconButton, Paper, Typography, useTheme } from '@mui/material';
import { ChatMessagesZone } from './components/ChatMessagesZone';
import AvatarProfile from '../../../assets/images/avatar.jpg';
import { MenuOptions } from './components/MenuOptions';
import { ChatsList } from './components/ChatsList';
import { SvgLogo } from './components/SvgLogo';
import { AppTooltip } from '../AppTootip';

export const MainContainer = () => {
	const theme = useTheme();
	const [showMessageZone, setShowMessageZone] = useState(false);

	const handleSelectMessage = () => {
		setShowMessageZone(true);
	};

	return (
		<Box
			width='100%'
			height='100%'
			maxWidth={1600}
			marginX='auto'
			zIndex={99}
			sx={{
				overflowY: 'hidden',
			}}
		>
			<Box className='mainContentArea' width='100%' height='100%' display='flex'>
				<Box
					component={Paper}
					className='sideLeft'
					display='flex'
					flexDirection='column'
					width='100%'
					height='100%'
					maxWidth={theme.spacing(60)}
					position='relative'
				>
					<Box
						height={theme.spacing(7)}
						component={Paper}
						elevation={0}
						display='flex'
						justifyContent='space-between'
						alignItems='center'
						paddingY={theme.spacing(1)}
						paddingX={theme.spacing(2)}
						borderRadius={theme.spacing(0)}
					>
						<Avatar sx={{ cursor: 'pointer' }}>
							<CardMedia component='img' src={AvatarProfile} alt='foto_perfil' />
						</Avatar>
						<Box display='flex' alignItems='center' justifyContent='center' gap={1}>
							<AppTooltip title='Ver status'>
								<IconButton>
									<Icon sx={{ fontSize: '1.4rem' }}>data_saver_off</Icon>
								</IconButton>
							</AppTooltip>
							<AppTooltip title='Novo chat'>
								<IconButton>
									<Icon sx={{ fontSize: '1.4rem' }}>chat</Icon>
								</IconButton>
							</AppTooltip>
							<MenuOptions />
						</Box>
					</Box>
					<ChatsList onClick={handleSelectMessage} />
				</Box>
				{(
					showMessageZone && <ChatMessagesZone />
				)}
				{(!showMessageZone &&
					<Box
						className='sideRight'
						flex='1'
						gap={4}
						display='flex'
						flexDirection='column'
						alignItems='center'
						justifyContent='center'
						height='100%'
						component={Paper}
						elevation={0}
						borderRadius={theme.spacing(0)}
						position='relative'
						borderBottom={'5px solid #00A884'}
						padding={theme.spacing(2)}
						borderLeft={`1px solid ${theme.palette.divider}`}
					>
						<SvgLogo />
						<Box display='flex' flexDirection='column' alignItems='center' justifyContent='center' gap={3}>
							<Typography variant='h5' component='h1' color='textPrimary' fontWeight='400'>
								WhatsApp Web
							</Typography>
							<Typography variant='caption' component='p' color='textSecondary' align='center'>
								Agora envie e receba mensagens sem manter seu telefone online.<br />Use o WhatsApp em até 4 dispositivos vinculados e 1 telefone ao mesmo tempo.
							</Typography>
							<hr style={{ width: '100%', borderColor: 'rgba(134,150,160,0.15)', marginTop: '.7rem' }} />
							<Box display='flex' alignItems='center' gap={2}>
								<Icon sx={{ fontSize: '1rem', }}>computer</Icon>
								<Typography variant='caption' component='p' color='textSecondary'>
									Faça chamadas da área de trabalho com o WhatsApp para Windows. <a href='https://www.whatsapp.com/download' target='blank' style={{ textDecoration: 'none', color: '#53bdeb', fontSize: 'inherit' }}>Clique aqui</a>
								</Typography>
							</Box>
							<Typography sx={{ fontSize: '.7rem', display: 'flex', alignItems: 'center', gap: '.4rem', position: 'absolute', bottom: '2rem' }} color='textSecondary'>
								<Icon sx={{ fontSize: '.8rem' }}>lock</Icon>
								<span style={{ fontSize: '.7rem' }}>End-to-end encrypted</span>
							</Typography>
						</Box>
					</Box>
				)}
			</Box>

		</Box>
	);
};
