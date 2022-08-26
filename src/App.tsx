import { Home } from './pages';
import { ChatsProvider } from './shared/contexts/ChatsContext';
import { AppThemeProvider } from './shared/contexts/ThemeContext';

export const App = () => {
	return (
		<AppThemeProvider>
			<ChatsProvider>
				<Home />
			</ChatsProvider>
		</AppThemeProvider>
	);
};

