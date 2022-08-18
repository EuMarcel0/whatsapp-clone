import { useState } from 'react';
import { Box, Icon, IconButton, Menu, MenuItem } from '@mui/material';
import { useAppThemeContext } from '../../../contexts/ThemeContext';

export const MenuOptions = () => {
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
			<IconButton
				aria-controls={open ? 'demo-positioned-menu' : undefined}
				aria-haspopup="true"
				aria-expanded={open ? 'true' : undefined}
				onClick={handleClick}
			>
				<Icon>more_vert_icon</Icon>
			</IconButton>
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
				<MenuItem onClick={handleClose}>Novo grupo</MenuItem>
				<MenuItem onClick={handleClose}>Mensagens com estrela</MenuItem>
				<MenuItem onClick={handleClose}>Configurações</MenuItem>
				<MenuItem onClick={handleToggleTheme}>Mudar tema</MenuItem>
				<MenuItem onClick={handleClose}>Sair</MenuItem>
			</Menu>
		</Box>
	);
};
