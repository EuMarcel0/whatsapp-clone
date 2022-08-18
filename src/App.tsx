import { Home } from './pages';
import { AppThemeProvider } from './shared/contexts/ThemeContext';

export const App = () => {
	return (

		<AppThemeProvider>
			<Home />
		</AppThemeProvider>
	);
};

