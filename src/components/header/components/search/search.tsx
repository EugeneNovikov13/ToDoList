import React from 'react';
import { useActions, useDebounce, useTypedSelector } from '../../../../hooks';
import styles from './search.module.css';

export const Search: React.FC = () => {
	const { searchByToDoList, setActiveAddInput } = useActions();

	const activeAddInput = useTypedSelector(state => state.headerState.activeAddInput);

	const debouncedSearch = useDebounce<string>(searchByToDoList, 300);

	return (
		<input
			className={
				!activeAddInput ? `${styles.activeSearchInput}` : `${styles.searchInput}`
			}
			type="text"
			placeholder="Найти..."
			onFocus={() => setActiveAddInput(false)}
			onChange={({ target }) => debouncedSearch(target.value)}
		></input>
	);
};
