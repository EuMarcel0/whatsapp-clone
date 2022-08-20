import { useCallback, useState } from 'react';

import { Box, Paper, useTheme } from '@mui/material';
import { useChatListItem } from '../../../contexts/ChatListItem';
import { ChatListProps } from '../../../contexts/ChatListTypes';
import { SearchInputChat } from './SearchInputChat';

import { ChatListItem } from './ChatListItem';

interface PropsChatList {
	onClick: () => void;
	showMessage?: boolean;
}

export const ChatsList = ({ onClick }: PropsChatList) => {
	const theme = useTheme();
	const { chatListItem } = useChatListItem();
	const [newChatListItem, setNewChatListItem] = useState<ChatListProps[]>(chatListItem);
	const [searchValue, setSearchValue] = useState('');

	const handleOrderChatByName = useCallback(() => {
		const newChatListItem = [...chatListItem];
		newChatListItem.sort((a, b) => (a.name > b.name ? 1 : -1));
		setNewChatListItem(newChatListItem);
		return newChatListItem;
	}, [newChatListItem]);


	const filteredChatListItem = searchValue.length > 0
		? chatListItem.filter(item => item.name.toLocaleLowerCase().includes(searchValue))
		: [];


	return (
		<Box
			flex='1'
			component={Paper}
			borderRadius={theme.spacing(0)}
			bgcolor={theme.palette.background.default}
			paddingTop='3rem'
			sx={{
				overflowY: 'auto',
				'&::-webkit-scrollbar': {
					width: '.4rem',
					height: '.4rem',
				},
				'&::-webkit-scrollbar-thumb': {
					backgroundColor: theme.palette.background.paper,
				}
			}}
		>
			<SearchInputChat
				onClick={handleOrderChatByName}
				value={searchValue}
				onChange={(e) => setSearchValue(e.target.value)}
				handleClearSearch={() => setSearchValue('')}
			/>
			{searchValue.length > 0 ? (
				<ChatListItem data={filteredChatListItem} onClick={onClick} />

			) : (
				<ChatListItem data={newChatListItem} onClick={onClick} />
			)
			}
		</Box>
	);
};
