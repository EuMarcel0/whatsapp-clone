import { Avatar, Box, CardMedia, Icon, IconButton, Paper, useTheme } from '@mui/material';
import { useAuthContext } from '../../../contexts/Auth-Context/AuthContext';
import { AppTooltip } from '../../AppTootip/AppTootip';
import { MenuUserOptions } from './MenuUserOptions';

interface UserContentAreaProps {
	toggleShowNewContactList: () => void;
}

export const UserContentArea = ({ toggleShowNewContactList }: UserContentAreaProps) => {
	const { users, toggleShowUserInfos } = useAuthContext();
	const theme = useTheme();

	return (
		<Box
			className='userContentArea'
			height={theme.spacing(7)}
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
			<AppTooltip title={users.displayName ? users.displayName : ''}>
				<Avatar sx={{ cursor: 'pointer' }}>
					<CardMedia component='img' src={users.photoURL ? users.photoURL : ''} onClick={toggleShowUserInfos} />
				</Avatar>
			</AppTooltip>
			<Box display='flex' alignItems='center' justifyContent='center' gap={1}>
				<AppTooltip title='Ver status'>
					<IconButton>
						<Icon sx={{ fontSize: '1.4rem' }}>data_saver_off</Icon>
					</IconButton>
				</AppTooltip>
				<AppTooltip title='Novo chat'>
					<IconButton onClick={toggleShowNewContactList}>
						<Icon sx={{ fontSize: '1.4rem' }}>chat</Icon>
					</IconButton>
				</AppTooltip>
				<MenuUserOptions />
			</Box>
		</Box>
	);
};
