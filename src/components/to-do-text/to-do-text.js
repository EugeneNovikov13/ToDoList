import styles from './to-do-text.module.css';

export const ToDoText = ({ text }) => {
	return <div className={styles.todoText}>{text}</div>;
};
