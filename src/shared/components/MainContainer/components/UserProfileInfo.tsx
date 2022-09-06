import { Box, useTheme, IconButton, Typography, Icon, CardMedia, Divider } from '@mui/material';
import { shade } from 'polished';

import { useAuthContext } from '../../../contexts/Auth-Context/AuthContext';
import { AppTooltip } from '../../AppTootip/AppTootip';
import { ImageModal } from '../../Modal-Image/ImageModal';

export const UserProfileInfo = () => {
	const { users, showUserInfos, toggleShowUserInfos } = useAuthContext();
	const theme = useTheme();

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
			left={showUserInfos ? theme.spacing(0) : theme.spacing(-60)}
			bottom={0}
			right={0}
			sx={{
				transition: 'linear .3s',
			}}
		>
			<Box
				className='header'
				bgcolor={theme.palette.mode === 'light' ? shade(.2, theme.palette.primary.main) : theme.palette.background.paper}
				paddingTop={theme.spacing(7)}
				paddingX={theme.spacing(2.8)}
				paddingBottom={theme.spacing(.8)}
				display='flex'
				alignItems='center'
				gap={2}
				position='relative'
				borderRight={`1px solid ${theme.palette.divider}`}
			>
				<AppTooltip title='Voltar'>
					<IconButton onClick={toggleShowUserInfos}>
						<Icon sx={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#FFF' }}>arrow_back</Icon>
					</IconButton>
				</AppTooltip>
				<Typography fontWeight='bold' fontSize='1rem' sx={{ color: '#FFF' }}>Perfil</Typography>
			</Box>
			<Box
				flex='2'
				display='flex'
				flexDirection='column'
				justifyContent='flex-start'
				alignItems='center'
				paddingY={theme.spacing(4)}
				paddingX={theme.spacing(4)}
				gap={theme.spacing(2)}
			>
				<ImageModal
					src={users?.photoURL}
					title={users.displayName}
				/>
				<Box
					marginTop={theme.spacing(6)}
					display='flex'
					flexDirection='column'
					justifyContent='flex-start'
					width='100%'
				>
					<Typography variant='caption' color='primary' sx={{ mb: theme.spacing(1) }}>Seu nome</Typography>
					<Divider />
					<Typography variant='h6' sx={{ mt: theme.spacing(2), mb: theme.spacing(3) }}>{users.displayName}</Typography>
					<Typography variant='caption' color='primary' sx={{ mb: theme.spacing(1) }}>Seu email</Typography>
					<Divider />
					<Typography variant='h6' sx={{ mt: theme.spacing(2) }}>{users.email}</Typography>
				</Box>
			</Box>
		</Box>
	);
};
