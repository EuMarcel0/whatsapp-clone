import { Box, Button, CardMedia, Icon, IconButton, Paper, Typography, useTheme } from '@mui/material';
import { shade } from 'polished';
import { useAppThemeContext } from '../../shared/contexts/ThemeContext';
import { useAuthContext } from '../../shared/contexts/AuthContext';
import LoginBgImage from '../../assets/images/login.svg';

interface LoginProps {
	children: React.ReactNode;
}

export const Login = ({ children }: LoginProps) => {
	const theme = useTheme();
	const { isAuthenticated, login } = useAuthContext();
	const { toggleTheme } = useAppThemeContext();

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
		>
			<Box
				display='flex'
				width='100%'
				height={theme.spacing(5.5)}
				justifyContent='space-between'
			>
				<Box display='flex'>
					<Typography variant='caption'>Bem-vindo ao meu app | <Typography variant='caption' sx={{ color: theme.palette.primary.main }}>WhatsApp - Clone</Typography></Typography>
				</Box>
				<IconButton onClick={toggleTheme}>
					<Icon>brightness_4</Icon>
				</IconButton>
			</Box>
			<Box width='100%' height='auto' display='flex' justifyContent='center' alignItems='center'>
				<Box display='flex' flexDirection='column'>
					<Typography variant='caption' fontSize='1rem'>Entre com o seu facebook para continuar</Typography>
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
						width: '50%',
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
				<Typography variant='caption' color='textSecondary'>
					© 2022 Copyright - Criado por Marcelo Silva. Todos os direitos reservados
				</Typography>
			</Box>
		</Box>
	);
};
