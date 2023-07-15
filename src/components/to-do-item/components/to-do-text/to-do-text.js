import styles from './to-do-text.module.css';

export const ToDoText = ({ text, setIsEdited }) => {
	return (
		<div className={styles.todoText} onClick={() => setIsEdited(true)}>
			{text}
		</div>
	);
};
