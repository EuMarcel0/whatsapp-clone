import { useState } from 'react';
import { Box, Icon, IconButton, Menu, MenuItem } from '@mui/material';
import { useAppThemeContext } from '../../../contexts/ThemeContext';
import { AppTooltip } from '../../AppTootip';

export const MenuUserOptions = () => {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const { toggleTheme } = useAppThemeContext();

	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleToggleTheme = () => {
		toggleTheme();
		handleClose();
	};

	return (
		<Box>
			<AppTooltip title='Menu'>
				<IconButton
					aria-controls={open ? 'demo-positioned-menu' : undefined}
					aria-haspopup="true"
					aria-expanded={open ? 'true' : undefined}
					onClick={handleClick}
				>
					<Icon sx={{ fontSize: '1.4rem' }}>more_vert_icon</Icon>
				</IconButton>
			</AppTooltip>
			<Menu
				aria-labelledby="demo-positioned-button"
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				anchorOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}
				sx={{
					mt: '2.6rem'
				}}
			>
				<MenuItem onClick={handleClose} sx={{ fontSize: '.8rem' }}>Novo grupo</MenuItem>
				<MenuItem onClick={handleClose} sx={{ fontSize: '.8rem' }}>Mensagens com estrela</MenuItem>
				<MenuItem onClick={handleClose} sx={{ fontSize: '.8rem' }}>Configurações</MenuItem>
				<MenuItem onClick={handleToggleTheme} sx={{ fontSize: '.8rem' }}>Mudar tema</MenuItem>
				<MenuItem onClick={handleClose} sx={{ fontSize: '.8rem' }}>Sair</MenuItem>
			</Menu>
		</Box>
	);
};
