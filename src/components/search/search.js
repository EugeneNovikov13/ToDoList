import { debounce, search } from '../../utils/utils';
import styles from './search.module.css';

export const Search = ({ setToDoList, activeAddInput, setActiveAddInput, setSorted }) => {
	const debounceSearch = debounce(search, 300);

	const onChange = ({ target }) => {
		setSorted(false);
		debounceSearch(target.value, setToDoList);
	};

	return (
		<input
			className={
				!activeAddInput ? `${styles.activeSearchInput}` : `${styles.searchInput}`
			}
			type="text"
			placeholder="Поиск..."
			onFocus={() => setActiveAddInput(false)}
			onChange={onChange}
		></input>
	);
};
