import { Box, Paper, useTheme, Typography, Icon } from '@mui/material';
import { SvgIntroLogo } from './SvgIntroLogo';

export const Intro = () => {
	const theme = useTheme();

	return (
		<Box
			className='sideRight introArea'
			flex='1'
			gap={1}
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
		>
			<SvgIntroLogo />
			<Box display='flex' flexDirection='column' alignItems='center' justifyContent='center' gap={2}>
				<Typography variant='h5' component='h1' color='textPrimary' fontSize={'1.7rem'} fontWeight='200' marginTop={theme.spacing(3)}>
					WhatsApp Web
				</Typography>
				<Typography variant='caption' component='p' color='textSecondary' align='center'>
					Agora envie e receba mensagens sem manter seu telefone online.<br />Use o WhatsApp em até 4 dispositivos vinculados e 1 telefone ao mesmo tempo.
				</Typography>
				<hr style={{ width: '100%', borderColor: 'rgba(134,150,160,0.15)', marginTop: '.3rem' }} />
				<Box display='flex' alignItems='center' gap={2}>
					<Icon sx={{ fontSize: '1rem', }}>computer</Icon>
					<Typography variant='caption' component='p' color='textSecondary' align='center'>
						Faça chamadas da área de trabalho com o WhatsApp para Windows. <a href='https://www.whatsapp.com/download' target='blank' style={{ textDecoration: 'none', color: '#53bdeb', fontSize: 'inherit' }}>Clique aqui</a>
					</Typography>
				</Box>
				<Typography sx={{ fontSize: '.7rem', display: 'flex', alignItems: 'center', gap: '.4rem', position: 'absolute', bottom: '2rem' }} color='textSecondary'>
					<Icon sx={{ fontSize: '.8rem' }}>lock</Icon>
					<span style={{ fontSize: '.7rem' }}>End-to-end encrypted</span>
				</Typography>
			</Box>
		</Box>
	);
};
