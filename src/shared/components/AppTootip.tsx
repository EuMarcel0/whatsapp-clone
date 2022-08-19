import { Box, Fade, Tooltip } from '@mui/material';

interface TootipProps {
	title: string;
	children: JSX.Element;
}

export const AppTooltip = ({ title, children }: TootipProps) => {
	return (
		<Box>
			<Tooltip title={title} TransitionComponent={Fade} TransitionProps={{ timeout: 600 }} >
				{children}
			</Tooltip>
		</Box>
	);
};
