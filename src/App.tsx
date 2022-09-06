import { Home } from './pages';
import { Login } from './pages/login/Login';
import { AuthProvider } from './shared/contexts/Auth-Context/AuthContext';
import { ChatsProvider } from './shared/contexts/Chats-Context/ChatsContext';
import { AppThemeProvider } from './shared/contexts/Theme-Context/ThemeContext';

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

