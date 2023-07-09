import { debounce, search } from '../../utils/utils';
import styles from './search.module.css';

export const Search = ({ setToDoList, activeAddInput, setActiveAddInput }) => {

	const debounceSearch = debounce(search, 300);

	return (
		<input className={!activeAddInput ? `${styles.activeSearchInput}` : `${styles.searchInput}`} type='text'
			   placeholder='Поиск...'
			   onFocus={() => setActiveAddInput(false)}
			   onChange={({ target }) => debounceSearch(target.value, setToDoList)}
		></input>
	);
};