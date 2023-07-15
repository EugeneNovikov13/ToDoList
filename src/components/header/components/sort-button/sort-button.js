import { useContext } from 'react';
import { AppContext } from '../../../../context';
import styles from './sort-button.module.css';

export const SortButton = ({ sorted }) => {
	const { setSorted } = useContext(AppContext);

	return (
		<button
			className={sorted ? `${styles.sortButtonSorted}` : `${styles.sortButton}`}
			onClick={() => (sorted ? setSorted(false) : setSorted(true))}
		></button>
	);
};
