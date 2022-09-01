import { Box, Icon, IconButton, Input, Paper, useTheme } from '@mui/material';
import { AppTooltip } from '../../AppTootip/AppTootip';

interface SearchInputContactProps {
	onClick: () => void;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	handleClearSearch: () => void;
}

export const SearchInputContact = ({ onClick, value, onChange, handleClearSearch }: SearchInputContactProps) => {
	const theme = useTheme();

	return (
		<Box
			component={Paper}
			elevation={0}
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
			sx={{
				borderLeft: '0',
			}}
			position='absolute'
			top={theme.spacing(13.6)}
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
				<AppTooltip title={value.length > 0 ? 'Limpar' : 'Pesquisar contato'}>
					<IconButton sx={{ mr: '1rem', transition: 'all ease 0.3s' }} onClick={handleClearSearch}>
						<Icon sx={{ fontSize: '1rem' }}>{value.length > 0 ? 'clear' : 'search'}</Icon>
					</IconButton>
				</AppTooltip>
				<Input
					size='small'
					fullWidth
					placeholder='Procurar contato'
					sx={{ fontSize: '.8rem' }}
					value={value}
					onChange={onChange}
				/>
			</Box>
		</Box>
	);
};
