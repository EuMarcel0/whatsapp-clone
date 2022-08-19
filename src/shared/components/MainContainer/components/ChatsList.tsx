import { Box, Paper, useTheme } from '@mui/material';

export const ChatsList = () => {
	const theme = useTheme();
	return (
		<Box
			flex='1'
			component={Paper}
			borderRadius={theme.spacing(0)}
		>
			Chat list
		</Box>
	);
};
