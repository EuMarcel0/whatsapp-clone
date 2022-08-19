import { Box, Icon, IconButton, Input, Paper, useTheme } from '@mui/material';
import { AppTooltip } from '../../AppTootip';

interface SearchInputChatProps {
	onClick: () => void;
}

export const SearchInputChat = ({ onClick }: SearchInputChatProps) => {
	const theme = useTheme();

	return (
		<Box
			component={Paper}
			elevation={0}
			variant='outlined'
			display='flex'
			alignItems='center'
			gap={1}
			width='100%'
			height='100%'
			maxHeight={theme.spacing(6)}
			borderRadius={theme.spacing(0)}
			paddingY={theme.spacing(1)}
			paddingX={theme.spacing(2)}
			bgcolor={theme.palette.background.default}
		>
			<Box
				flex='1'
				display='flex'
				alignItems='center'
				justifyContent='start'
				bgcolor={theme.palette.background.paper}
				height={theme.spacing(4)}
				borderRadius={theme.spacing(1)}
				paddingX={theme.spacing(1)}
				paddingY={theme.spacing(1)}
			>
				<AppTooltip title='Pesquisar conversa'>
					<IconButton sx={{ mr: '1rem' }}>
						<Icon sx={{ fontSize: '1rem' }}>search</Icon>
					</IconButton>
				</AppTooltip>
				<Input
					size='small'
					fullWidth
					placeholder='Procure ou inicie uma conversa'
					sx={{ fontSize: '.8rem' }}
				/>
			</Box>
			<AppTooltip title='Ordernar chats'>
				<Box width={theme.spacing(4)}>
					<IconButton size='small' onClick={onClick}>
						<Icon sx={{ fontSize: '1.3rem' }}>reorder_icon</Icon>
					</IconButton>
				</Box>
			</AppTooltip>
		</Box>
	);
};
