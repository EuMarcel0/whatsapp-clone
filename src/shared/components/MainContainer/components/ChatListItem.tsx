import { Box, CardMedia, Icon, Typography, useTheme } from '@mui/material';
import { useChatListContext } from '../../../contexts/ChatlistContext';
import { ChatListProps } from '../../../contexts/ChatListTypes';
import { AppTooltip } from '../../AppTootip';
interface ChatListItemProps {
	data: ChatListProps;
	onClick: () => void;
}
export const ChatListItem = ({ data, onClick }: ChatListItemProps) => {
	const theme = useTheme();

	return (
		<Box>
			<Box
				display='flex'
				alignItems='center'
				gap={theme.spacing(2)}
				paddingX={theme.spacing(2)}
				sx={{
					cursor: 'pointer',
					':hover': {
						backgroundColor: theme.palette.action.hover,
					}
				}}
				onClick={onClick}
			>
				<Box
					height='100%'
				>
					<AppTooltip title={data.name}>
						<CardMedia
							component='img'
							src={data.image}
							alt='foto_perfil'
							sx={{
								width: theme.spacing(6),
								height: '100%',
								borderRadius: theme.spacing(3),
								cursor: 'pointer',
							}}
						/>
					</AppTooltip>
				</Box>
				<Box
					display='flex'
					flexDirection='column'
					width='100%'
					height='100%'
					overflow='hidden'
					textOverflow='ellipsis'
					whiteSpace='nowrap'
					paddingY={theme.spacing(1.5)}
					borderBottom={'.01rem solid ' + theme.palette.action.hover}
				>
					<Box display='flex' alignItems='center' justifyContent='space-between'>
						<Typography variant='subtitle1' color='textPrimary' fontWeight={'400'}>{data.name}</Typography>
						<Typography variant='body2' color='textSecondary' sx={{ fontSize: '.8rem' }}>{data.date}</Typography>
					</Box>
					<Box
						display='flex'
						alignItems='center'
					>
						<Icon sx={{ fontSize: '.9rem' }}>done</Icon>
						<AppTooltip title={data.lastMessage} >
							<Typography
								variant='body2'
								color='textSecondary'
								overflow='hidden'
								whiteSpace='nowrap'
								textOverflow='ellipsis'
								sx={{ fontSize: '.7rem' }}
							>
								{data.lastMessage}
							</Typography>
						</AppTooltip>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};
