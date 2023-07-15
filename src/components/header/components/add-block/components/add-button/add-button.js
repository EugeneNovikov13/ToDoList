import styles from './add-button.module.css';

export const AddButton = ({ isEmptyValue, onAddButtonClick }) => {
	return (
		<button
			className={styles.addButton}
			disabled={isEmptyValue}
			onClick={onAddButtonClick}
		>
			+
		</button>
	);
};
