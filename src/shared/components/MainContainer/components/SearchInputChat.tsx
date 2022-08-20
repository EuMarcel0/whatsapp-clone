import { Box, Icon, IconButton, Input, Paper, useTheme } from '@mui/material';
import { AppTooltip } from '../../AppTootip';

interface SearchInputChatProps {
	onClick: () => void;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	handleClearSearch: () => void;
}

export const SearchInputChat = ({ onClick, value, onChange, handleClearSearch }: SearchInputChatProps) => {
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
			position='absolute'
			top={'3.1rem'}
			left={0}
			right={0}
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
					<IconButton sx={{ mr: '1rem', transition: 'all ease 0.3s' }} onClick={handleClearSearch}>
						<Icon sx={{ fontSize: '1rem' }}>{value.length > 0 ? 'clear' : 'search'}</Icon>
					</IconButton>
				</AppTooltip>
				<Input
					size='small'
					fullWidth
					placeholder='Procure uma conversa'
					sx={{ fontSize: '.8rem' }}
					value={value.normalize()}
					onChange={onChange}
				/>
			</Box>
			<AppTooltip title='Ordernar chats A-Z'>
				<Box width={theme.spacing(4)}>
					<IconButton size='small' onClick={onClick}>
						<Icon sx={{ fontSize: '1.3rem' }}>reorder_icon</Icon>
					</IconButton>
				</Box>
			</AppTooltip>
		</Box>
	);
};
