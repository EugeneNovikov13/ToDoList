import styles from './toDoItem.module.css';

export const ToDoItem = props => {
	const { id, text, completed } = props;

	return (
		<div className={styles.todoItem}>
			<div
				className={completed ? `${styles.checkboxChecked}` : `${styles.checkbox}`}
			></div>
			<div className={styles.todoText}>{text}</div>
		</div>
	);
};
