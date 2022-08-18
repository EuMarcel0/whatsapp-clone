
import { createTheme } from '@mui/material';

export const LightTheme =  createTheme({
	palette:{
		mode: 'light',
		primary:{
			main: '#00A884',
			light: '#F8F8F8',
			contrastText: '#333',
		},
		secondary:{
			main: '#333',
			dark: '#333',
			light: '#333',
			contrastText: '#333',
		},
		background: {
			default: '#E0E0DD',
			paper: '#F0F2F5',
		}
	},
	typography:{
		allVariants: {
			color: '#333',
		}
	}
});
