import styles from './edited-item.module.css';

export const EditedItem = ({ ...rest }) => {
	return (
		<input
			className={styles.editedItem}
			type="text"
			autoFocus={true}
			{...rest}
		></input>
	);
};
