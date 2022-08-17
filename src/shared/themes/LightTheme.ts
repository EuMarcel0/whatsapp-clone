
import { createTheme } from '@mui/material';

export const LightTheme =  createTheme({
	palette:{
		mode: 'dark',
		primary:{
			main: '#FFFFFF',
			light: '#F8F8F8',
			contrastText: '#333333',
		},
		secondary:{
			main: '#FFFFFF',
			dark: '#F8F8F8',
			light: '#FFFFFF',
			contrastText: '#FFFFFF',
		},
		background: {
			default: '#FFFFFF',
			paper: '#F8F8F8',
		}
	},
	typography:{
		allVariants: {
			color: '#333333',
		}
	}
});
