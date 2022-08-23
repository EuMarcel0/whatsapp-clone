import { createTheme } from '@mui/material';

export const DarkTheme =  createTheme({
	palette:{
		mode: 'dark',
		primary:{
			main: '#00A884',
			light: '#F8F8F8',
			dark: '#202C33',
			contrastText: '#FFF',
		},
		action:{
			hover: '#202C33',
		},
		divider: 'rgba(233,237,239,0.12)',
		info: {
			main: '#202C33',
			light: '#2A3942',
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
