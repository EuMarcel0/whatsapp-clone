import { Home } from './pages';
import { Login } from './pages/login/Login';
import { AuthProvider } from './shared/contexts/AuthContext';
import { ChatsProvider } from './shared/contexts/ChatsContext';
import { AppThemeProvider } from './shared/contexts/ThemeContext';

export const App = () => {
	console.log('render App');
	return (
		<AppThemeProvider>
			<AuthProvider>
				<ChatsProvider>
					<Login>
						<Home />
					</Login>
				</ChatsProvider>
			</AuthProvider>
		</AppThemeProvider>
	);
};

