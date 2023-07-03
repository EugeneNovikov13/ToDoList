import { useState } from 'react';
import { debounce, search } from '../../utils/utils';
import styles from './search.module.css';

export const Search = ({ setToDoList, activeAddInput, setActiveAddInput }) => {
	const [searchValue, setSearchValue] = useState('');

	const debounceSearch = debounce(search, 1000);

	const onChange = ({ target }) => {
		setSearchValue(target.value);
		debounceSearch(target.value, setToDoList);
	};

	return (
		<input
			className={
				!activeAddInput ? `${styles.activeSearchInput}` : `${styles.searchInput}`
			}
			type="text"
			placeholder="Поиск..."
			value={searchValue}
			onFocus={() => setActiveAddInput(false)}
			onChange={onChange}
		></input>
	);
};
