import { createTheme } from '@mui/material';

export const DarkTheme =  createTheme({
	palette:{
		mode: 'dark',
		primary:{
			main: '#202C33',
			light: '#222E35',
			contrastText: '#FFFFFF',
		},
		secondary:{
			main: '#222E35',
			dark: '#202C33',
			light: '#202C33',
			contrastText: '#FFFFFF',
		},
		background: {
			default: '#202C33',
			paper: '#222E35',
		}
	},
	typography:{
		allVariants: {
			color: '#FFFFFF',
		}
	}
});
