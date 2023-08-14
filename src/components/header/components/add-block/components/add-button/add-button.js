import styles from './add-button.module.css';

export const AddButton = ({ isEmptyValue, ...rest }) => {
	return (
		<button className={styles.addButton} disabled={isEmptyValue} {...rest}>
			+
		</button>
	);
};
