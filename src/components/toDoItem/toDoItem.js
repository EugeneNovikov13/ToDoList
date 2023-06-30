import styles from './toDoItem.module.css';

export const ToDoItem = props => {
	const { completed, title } = props;

	return (
		<>
			<div
				className={completed ? `${styles.checkboxChecked}` : `${styles.checkbox}`}
			></div>
			<div className={styles.todoText}>{title}</div>
		</>
	);
};
