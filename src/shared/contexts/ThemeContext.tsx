import React, { createContext, ReactNode, useCallback, useContext, useMemo, useState } from 'react';
import { Box, ThemeProvider } from '@mui/material';
import { DarkTheme, LightTheme } from '../themes';

interface ThemeContextProps {
	themeName: 'light' | 'dark';
	toggleTheme: () => void;
}
interface ThemeProviderProps {
	children: ReactNode;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const AppThemeProvider = ({ children }: ThemeProviderProps) => {
	const [themeName, setThemeName] = useState<'light' | 'dark'>('light');

	const toggleTheme = useCallback(() => {
		setThemeName(oldThemeName => oldThemeName === 'dark' ? 'light' : 'dark');
	}, []);

	const theme = useMemo(() => {
		if (themeName === 'light') return LightTheme;
		return DarkTheme;
	}, [themeName]);

	console.log(themeName);

	return (
		<ThemeContext.Provider value={{ toggleTheme, themeName }}>
			<ThemeProvider theme={theme}>
				<Box width='100vw' height='100vh' bgcolor={theme.palette.background.default}>
					{children}
				</Box>
			</ThemeProvider>
		</ThemeContext.Provider>
	);
};

export const useAppThemeContext = () => useContext(ThemeContext);
