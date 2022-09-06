import { useState, useCallback } from 'react';
import { Box, CardMedia, useTheme, IconButton, Icon } from '@mui/material';

import { AppTooltip } from '../AppTootip/AppTootip';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

const style = {
	position: 'relative' as const,
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	bgcolor: 'background.paper',
	boxShadow: 24,
	p: 4,
	width: '40%',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
};

interface ImageModalProps {
	src: string | null;
	title: string | null;
}

export const ImageModal = ({ src, title }: ImageModalProps) => {
	const [open, setOpen] = useState(false);
	const theme = useTheme();

	const toogleShowModal = useCallback(() => {
		setOpen(!open);
	}, [open]);

	return (
		<Box>
			<Button onClick={toogleShowModal} sx={{ '&:hover': { backgroundColor: 'transparent' } }}>
				<AppTooltip title='Ver foto'>
					<CardMedia
						component='img'
						image={src ? src : ''}
						sx={{
							width: theme.spacing(25),
							height: theme.spacing(25),
							borderRadius: '50%',
							cursor: 'pointer',
						}}
					/>
				</AppTooltip>
				<Modal
					open={open}
					onClose={toogleShowModal}
					aria-labelledby="modal-modal-title"
					aria-describedby="modal-modal-description"
				>
					<Box sx={style}>
						<Typography id="modal-modal-title" variant='caption' align='center' sx={{ mb: theme.spacing(4) }}>
							{title}
						</Typography>
						<CardMedia
							component='img'
							image={src ? src : ''}
							sx={{
								width: '100%',
								height: '100%',
							}}
						/>
						<AppTooltip title='Fechar'>
							<IconButton sx={{ position: 'absolute', top: '10px', right: '10px' }}>
								<Icon>close</Icon>
							</IconButton>
						</AppTooltip>
					</Box>
				</Modal>
			</Button>
		</Box>
	);
};
