import { useTypedSelector } from '../../../../hooks';
import { useDispatch } from 'react-redux';
import { setSorted } from '../../../../redux/actions/header';
import styles from './sort-button.module.css';

export const SortButton = () => {
	const dispatch = useDispatch();

	const sorted = useTypedSelector(state => state.headerState.sorted);

	return (
		<button
			className={sorted ? `${styles.sortButtonSorted}` : `${styles.sortButton}`}
			onClick={() =>
				sorted ? dispatch(setSorted(false)) : dispatch(setSorted(true))
			}
		></button>
	);
};
