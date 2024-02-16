import { useDispatch, useSelector } from 'react-redux';
import { useDebounce } from '../../../../hooks';
import { selectorActiveAddInput } from '../../../../redux/selectors';
import { setActiveAddInput } from '../../../../redux/actions/header';
import { searchByToDoList } from '../../../../redux/actions/to-do-list';
import styles from './search.module.css';

export const Search = () => {
	const dispatch = useDispatch();

	const activeAddInput = useSelector(selectorActiveAddInput);

	const debounceSearch = useDebounce(dispatch, 300);

	return (
		<input
			className={
				!activeAddInput ? `${styles.activeSearchInput}` : `${styles.searchInput}`
			}
			type="text"
			placeholder="Найти..."
			onFocus={() => dispatch(setActiveAddInput(false))}
			onChange={({ target }) => debounceSearch(searchByToDoList(target.value))}
		></input>
	);
};
