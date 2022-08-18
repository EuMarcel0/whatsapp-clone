import { Box, Button } from '@mui/material';
import { useAppThemeContext } from '../../shared/contexts/ThemeContext';

export const Home = () => {
	const { toggleTheme } = useAppThemeContext();

	return (
		<Box>
			<Button onClick={toggleTheme}>Toggle Theme</Button>
		</Box>
	);
};
