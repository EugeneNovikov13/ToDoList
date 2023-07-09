import styles from './sort-button.module.css';

export const SortButton = ({ requestGetToDos, sorted, setSorted }) => {

	const onClick = () => {
		if (sorted) {
			requestGetToDos();
			setSorted(false);
		} else {
			requestGetToDos('http://localhost:3004/todos?_sort=text&_order=asc');
			setSorted(true);
		}
	};

	return (
		<button className={sorted ? `${styles.sortButtonSorted}` : `${styles.sortButton}`} onClick={onClick}></button>
	);
};