import { createTheme } from '@mui/material';

export const DarkTheme =  createTheme({
	palette:{
		mode: 'dark',
		primary:{
			main: '#00A884',
			light: '#F8F8F8',
			contrastText: '#FFF',
		},
		secondary:{
			main: '#F8F8F8',
			dark: '#F8F8F8',
			light: '#F8F8F8',
			contrastText: '#F8F8F8',
		},
		background: {
			default: '#0A1014',
			paper: '#202C33',
		}
	},
	typography:{
		allVariants: {
			color: '#FFFFFF',
		}
	}
});
