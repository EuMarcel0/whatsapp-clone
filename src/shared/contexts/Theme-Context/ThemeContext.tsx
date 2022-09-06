import React, { createContext, ReactNode, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { Box, ThemeProvider } from '@mui/material';
import { DarkTheme, LightTheme } from '../../themes';
import { usePersistedState } from '../../hooks/usePersistedState';

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
	const { state, setState } = usePersistedState('themeName', themeName);


	const toggleTheme = useCallback(() => {
		setState((themeName: string) => themeName === 'light' ? 'dark' : 'light');
		localStorage.setItem('themeName', JSON.stringify(themeName));
	}, [state]);

	const theme = useMemo(() => {
		if (state === 'light') return LightTheme;
		return DarkTheme;
	}, [state]);

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
