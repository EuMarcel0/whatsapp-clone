import { Box, Button, CardMedia, Icon, IconButton, Paper, Typography, useMediaQuery, useTheme } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { shade } from 'polished';

import { useAppThemeContext } from '../../shared/contexts/ThemeContext';
import { useAuthContext } from '../../shared/contexts/AuthContext';
import LoginBgImage from '../../assets/images/login.svg';
import Wave2 from '../../assets/images/wave2.svg';
import { AppTooltip } from '../../shared';

interface LoginProps {
	children: React.ReactNode;
}

export const Login = ({ children }: LoginProps) => {
	const theme = useTheme();
	const { isAuthenticated, login } = useAuthContext();
	const { toggleTheme } = useAppThemeContext();
	const mdDown = useMediaQuery(theme.breakpoints.down('md'));

	if (isAuthenticated) {
		return (<>{children}</>);
	}

	return (
		<Box
			display='flex'
			flexDirection='column'
			component={Paper}
			elevation={0}
			height='100vh'
			width='100vw'
			padding={theme.spacing(2)}
			position='relative'
		>
			<Box
				display='flex'
				width='100%'
				height={theme.spacing(5.5)}
				justifyContent='space-between'
				zIndex={9}
			>
				<Box display='flex' alignItems='center'>
					<WhatsAppIcon sx={{ color: mdDown ? '' : '#FFF', mr: '.5rem' }} />
					<Typography variant='caption' sx={{ color: mdDown ? '' : '#FFF' }}>Bem-vindo | WhatsApp - Clone</Typography>
				</Box>
				<AppTooltip title='Mudar tema'>
					<IconButton onClick={toggleTheme}>
						<Icon sx={{ color: mdDown ? '' : '#FFF' }}>brightness_4</Icon>
					</IconButton>
				</AppTooltip>
			</Box>
			<Box width='100%' height='100%' display='flex' justifyContent='center' alignItems='center' flexDirection={mdDown ? 'column' : 'row'} zIndex={9}>
				<Box display='flex' flexDirection='column' alignItems='center' gap={2}>
					<Typography variant='subtitle2' component='h1' fontSize={mdDown ? '1.5rem' : '1rem'} align='center' >Entre com o seu facebook para continuar</Typography>
					<Button
						onClick={login}
						variant='contained'
						sx={{
							'&:hover': {
								backgroundColor: shade(.2, theme.palette.primary.main),
							},
							color: '#FFF',
						}}
					>
						Entrar com facebook
					</Button>
				</Box>
				<CardMedia
					sx={{
						width: mdDown ? '100%' : '50%',
					}}
					component='img'
					image={LoginBgImage}
				/>
			</Box>
			<Box
				flex='1'
				display='flex'
				justifyContent='center'
				alignItems='end'
				height='100%'
			>
				<Typography variant='caption' color='textSecondary' fontSize={mdDown ? '.7rem' : ''} align='center'>
					© 2022 Copyright - Criado por Marcelo Silva. Todos os direitos reservados
				</Typography>
			</Box>
			{(!mdDown &&
				<CardMedia
					component='img'
					image={Wave2}
					sx={{
						position: 'absolute',
						top: 0,
						left: 0,
						right: 0,
					}}
				/>
			)}
		</Box>
	);
};
