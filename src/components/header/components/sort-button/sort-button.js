import styles from './sort-button.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectorSorted } from '../../../../redux/selectors';
import { setSorted } from '../../../../redux/actions/header/set-sorted';

export const SortButton = () => {
	const dispatch = useDispatch();

	const sorted = useSelector(selectorSorted);

	return (
		<button
			className={sorted ? `${styles.sortButtonSorted}` : `${styles.sortButton}`}
			onClick={() => (sorted ? dispatch(setSorted(false)) : dispatch(setSorted(true)))}
		></button>
	);
};
