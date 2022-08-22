import { Home } from './pages';
import { ChatListItemProvider } from './shared/contexts/ChatlistContext';
import { AppThemeProvider } from './shared/contexts/ThemeContext';

export const App = () => {
	return (
		<AppThemeProvider>
			<ChatListItemProvider>
				<Home />
			</ChatListItemProvider>
		</AppThemeProvider>
	);
};

