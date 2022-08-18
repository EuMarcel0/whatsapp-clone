
import { createTheme } from '@mui/material';

export const LightTheme =  createTheme({
	palette:{
		mode: 'dark',
		primary:{
			main: '#005c4b',
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
			default: '#FFFFFF',
			paper: '#F8F8F8',
		}
	},
	typography:{
		allVariants: {
			color: '#FFF',
		}
	}
});
