import { useContext } from 'react';
import { AppContext } from '../../../../context';
import { debounce, search } from '../../../../utils/utils';
import styles from './search.module.css';

export const Search = ({ activeAddInput, setActiveAddInput }) => {
	const { setToDoList } = useContext(AppContext);

	const debounceSearch = debounce(search, 300);

	return (
		<input
			className={
				!activeAddInput ? `${styles.activeSearchInput}` : `${styles.searchInput}`
			}
			type="text"
			placeholder="Найти..."
			onFocus={() => setActiveAddInput(false)}
			onChange={({ target }) => debounceSearch(target.value, setToDoList)}
		></input>
	);
};