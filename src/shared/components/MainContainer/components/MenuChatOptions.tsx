import { useState } from 'react';
import { Box, Icon, IconButton, Menu, MenuItem } from '@mui/material';
import { AppTooltip } from '../../AppTootip';

export const MenuChatOptions = () => {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);

	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
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
				<MenuItem onClick={handleClose} sx={{ fontSize: '.8rem' }}>Informações de contato</MenuItem>
				<MenuItem onClick={handleClose} sx={{ fontSize: '.8rem' }}>Relatório de negócios</MenuItem>
				<MenuItem onClick={handleClose} sx={{ fontSize: '.8rem' }}>Quadra</MenuItem>
				<MenuItem onClick={handleClose} sx={{ fontSize: '.8rem' }}>Selecionar mensagens</MenuItem>
				<MenuItem onClick={handleClose} sx={{ fontSize: '.8rem' }}>Fechar bate-papo</MenuItem>
				<MenuItem onClick={handleClose} sx={{ fontSize: '.8rem' }}>Silenciar notificações</MenuItem>
				<MenuItem onClick={handleClose} sx={{ fontSize: '.8rem' }}>Mensagens desaparecendo</MenuItem>
				<MenuItem onClick={handleClose} sx={{ fontSize: '.8rem' }}>Limpar mensagens</MenuItem>
				<MenuItem onClick={handleClose} sx={{ fontSize: '.8rem' }}>Excluir bate-papo</MenuItem>
			</Menu>
		</Box>
	);
};
