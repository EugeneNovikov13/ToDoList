import { useContext } from 'react';
import { AppContext } from '../../../../context';
import { debounce, search } from '../../../../utils/utils';
import styles from './search.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectorActiveAddInput } from '../../../../redux/selectors';
import { setActiveAddInput } from '../../../../redux/actions/header';

export const Search = () => {
	const dispatch = useDispatch();

	const { setToDoList } = useContext(AppContext);

	const activeAddInput = useSelector(selectorActiveAddInput);

	const debounceSearch = debounce(search, 300);

	return (
		<input
			className={
				!activeAddInput ? `${styles.activeSearchInput}` : `${styles.searchInput}`
			}
			type="text"
			placeholder="Найти..."
			onFocus={() => dispatch(setActiveAddInput(false))}
			onChange={({ target }) => debounceSearch(target.value, setToDoList)}
		></input>
	);
};
