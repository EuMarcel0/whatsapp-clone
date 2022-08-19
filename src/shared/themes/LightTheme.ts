
import { createTheme } from '@mui/material';

export const LightTheme =  createTheme({
	palette:{
		mode: 'light',
		primary:{
			main: '#00A884',
			light: '#F8F8F8',
			contrastText: '#333',
		},
		divider: '#E0E0E0',
		background: {
			default: '#F8F8F8',
		}
	},
	typography:{
		allVariants: {
			color: '#333',
		}
	}
});
