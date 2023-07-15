import styles from './sort-button.module.css';

export const SortButton = ({ sorted, setSorted }) => {
	return (
		<button
			className={sorted ? `${styles.sortButtonSorted}` : `${styles.sortButton}`}
			onClick={() => (sorted ? setSorted(false) : setSorted(true))}
		></button>
	);
};
