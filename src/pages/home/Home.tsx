import { Box, useTheme } from '@mui/material';
import { MainContainer } from '../../shared/components';

export const Home = () => {
	const theme = useTheme();

	return (
		<Box
			width='100vw' height='100vh'
			paddingY={theme.spacing(3)}
			paddingTop={theme.spacing(0)}
			bgcolor={theme.palette.common.black}
			position='relative'
		>
			<Box
				width='100%'
				bgcolor={theme.palette.mode === 'light' ? theme.palette.primary.main : ''}
				height={theme.spacing(15.8)}
			></Box>
			<MainContainer />
		</Box>
	);
};
