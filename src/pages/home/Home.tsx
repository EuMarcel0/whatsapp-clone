import { Box, useTheme } from '@mui/material';
import { MainContainer } from '../../shared/components';

export const Home = () => {
	const theme = useTheme();

	return (
		<Box width='100vw' height='100vh' paddingY={theme.spacing(3)}>
			<MainContainer />
		</Box>
	);
};
