import styles from './add-button.module.css';

export const AddButton = ({ ...rest }) => {
	return (
		<button className={styles.addButton} {...rest}>
			+
		</button>
	);
};
