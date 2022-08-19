import { createTheme } from '@mui/material';

export const DarkTheme =  createTheme({
	palette:{
		mode: 'dark',
		primary:{
			main: '#00A884',
			light: '#F8F8F8',
			contrastText: '#FFF',
		},
		background: {
			default: '#0A1014',
		}
	},
	typography:{
		allVariants: {
			color: '#FFFFFF',
		}
	}
});
