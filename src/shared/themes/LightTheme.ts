
import { createTheme } from '@mui/material';

export const LightTheme =  createTheme({
	palette:{
		mode: 'light',
		primary:{
			main: '#00A884',
			light: '#F8F8F8',
			contrastText: '#333',
		},
		background: {
			default: '#e0e0dd',
		}
	},
	typography:{
		allVariants: {
			color: '#333',
		}
	}
});
