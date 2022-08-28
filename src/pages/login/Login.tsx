import { Box, Button } from '@mui/material';
import { useAuthContext } from '../../shared/contexts/AuthContext';

interface LoginProps {
	children: React.ReactNode;
}

export const Login = ({ children }: LoginProps) => {
	const { isAuthenticated, login } = useAuthContext();

	if (isAuthenticated) {
		return (<>{children}</>);
	}

	return (
		<Box>
			<Button onClick={login}>
				Fazer Login
			</Button>
		</Box>
	);
};
