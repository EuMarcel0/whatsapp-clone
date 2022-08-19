import { Box, Icon, IconButton, Paper, TextField, Tooltip, useTheme } from '@mui/material';
import { AppTooltip } from '../../AppTootip';

export const SearchInputChat = () => {
	const theme = useTheme();

	return (
		<Box
			component={Paper}
			elevation={2}
			display='flex'
			alignItems='center'
			width='100%'
			height='100%'
			maxHeight={theme.spacing(6)}
			borderRadius={theme.spacing(0)}
			paddingY={theme.spacing(1)}
			paddingX={theme.spacing(2)}
		>
			<Box
				flex='1'
			>
				<TextField

				/>
			</Box>
			<AppTooltip
				title='Ordernar chats'
			>
				<Box width={theme.spacing(4)}>
					<IconButton size='small'>
						<Icon sx={{ fontSize: '1.3rem' }}>reorder_icon</Icon>
					</IconButton>
				</Box>
			</AppTooltip>
		</Box>
	);
};
