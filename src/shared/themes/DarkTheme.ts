import { createTheme } from '@mui/material';

export const DarkTheme =  createTheme({
	palette:{
		mode: 'dark',
		primary:{
			main: '#FF0',
			light: '#FF0',
			contrastText: '#FF0',
		},
		secondary:{
			main: '#FF0',
			dark: '#FF0',
			light: '#FF0',
			contrastText: '#FF0',
		},
		background: {
			default: '#FF0',
			paper: '#FF0',
		}
	},
	typography:{
		allVariants: {
			color: '#FFFFFF',
		}
	}
});
