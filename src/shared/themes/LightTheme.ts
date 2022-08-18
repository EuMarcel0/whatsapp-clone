
import { createTheme } from '@mui/material';

export const LightTheme =  createTheme({
	palette:{
		mode: 'dark',
		primary:{
			main: '#00A884',
			light: '#F8F8F8',
			contrastText: '#FFF',
		},
		secondary:{
			main: '#FFFFFF',
			dark: '#F8F8F8',
			light: '#FFFFFF',
			contrastText: '#FFFFFF',
		},
		background: {
			default: '#E0E0DD',
			paper: '#F0F2F5',
		}
	},
	typography:{
		allVariants: {
			color: '#FFF',
		}
	}
});
