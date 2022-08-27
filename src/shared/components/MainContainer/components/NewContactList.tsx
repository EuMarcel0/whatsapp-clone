import { Box, Icon, IconButton, Typography, useTheme } from '@mui/material';
import { AppTooltip } from '../../AppTootip/AppTootip';

interface NewContactListProps {
	showContactList: boolean;
	hideContactList: () => void;
}

export const NewContactList = ({ showContactList, hideContactList }: NewContactListProps) => {
	const theme = useTheme();

	return (
		<Box
			position='absolute'
			width='100%'
			maxWidth='480px'
			bgcolor={theme.palette.background.default}
			top={0}
			left={showContactList ? 0 : '-480px'}
			bottom={0}
			right={0}
			sx={{
				transition: '.4s linear',
			}}
		>
			<Box
				bgcolor={theme.palette.background.paper}
				paddingTop={theme.spacing(7)}
				paddingX={theme.spacing(2.8)}
				paddingBottom={theme.spacing(1.5)}
				display='flex'
				alignItems='center'
				gap={2}
			>
				<AppTooltip title='Novo chat'>
					<IconButton onClick={hideContactList}>
						<Icon sx={{ fontSize: '1.4rem', fontWeight: 'bold' }}>arrow_back</Icon>
					</IconButton>
				</AppTooltip>
				<Typography fontWeight='bold' fontSize='1rem'>Novo chat</Typography>
			</Box>
		</Box>
	);
};
