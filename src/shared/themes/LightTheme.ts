
import { createTheme } from '@mui/material';

export const LightTheme =  createTheme({
	palette:{
		mode: 'light',
		primary:{
			main: '#00A884',
			light: '#F8F8F8',
			dark: '#202C33',
			contrastText: '#333',
		},
		divider: '#E0E0E0',
		info: {
			main: '#E0E0E0',
			light: '#FFF',
		},
		common: {
			black: '#DEDFDD',
		},
		background: {
			default: '#f9f9f9',
			paper: '#EEEE',
		}
	},
	typography:{
		allVariants: {
			color: '#333',
		}
	}
});
