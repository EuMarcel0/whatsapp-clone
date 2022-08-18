import { Avatar, Box, CardMedia, Icon, IconButton, Paper, useTheme } from '@mui/material';
import AvatarProfile from '../../../assets/images/avatar.jpg';

export const MainContainer = () => {
	const theme = useTheme();

	return (
		<Box
			width='100%'
			height='100%'
			maxWidth={1600}
			marginX='auto'
		>
			<Box className='mainContentArea' width='100%' height='100%' display='flex'>
				<Box className='sideLeft' width='100%' maxWidth={theme.spacing(60)} borderRight={'1px solid #d1d7db6e'}>
					<Box
						height={theme.spacing(7)}
						component={Paper}
						display='flex'
						justifyContent='space-between'
						alignItems='center'
						paddingY={theme.spacing(1)}
						paddingX={theme.spacing(2)}
						borderRadius={theme.spacing(0)}
					>
						<Avatar>
							<CardMedia component='img' src={AvatarProfile} alt='foto_perfil' />
						</Avatar>
						<Box display='flex' alignItems='center' justifyContent='center' gap={2}>
							<IconButton size='small'>
								<Icon>data_saver_off</Icon>
							</IconButton>
							<IconButton size='small'>
								<Icon>chat</Icon>
							</IconButton>
							<IconButton size='small'>
								<Icon fontSize='small'>more_vert_icon</Icon>
							</IconButton>
						</Box>
					</Box>
				</Box>
				<Box className='sideRight' flex='1' height='100%' component={Paper} borderRadius={theme.spacing(0)}>
					...
				</Box>
			</Box>

		</Box>
	);
};
