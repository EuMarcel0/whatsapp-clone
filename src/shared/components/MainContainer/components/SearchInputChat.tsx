import { Box, Paper, useTheme } from '@mui/material';

export const SearchInputChat = () => {
	const theme = useTheme();

	return (
		<Box
			component={Paper}
			elevation={2}
			display='flex'
			alignItems='center'
			width='100%'
			height='100%'
			maxHeight={theme.spacing(6)}
			borderRadius={theme.spacing(0)}
		>
			...
		</Box>
	);
};
