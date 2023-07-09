import { Link } from 'react-router-dom';
import styles from './to-do-text.module.css';

export const ToDoText = ({ id, text }) => {
	return (
		<div
			className={styles.todoText}
		><Link className={styles.toDoLink} to={`todos/${id}`}>{text}</Link>
		</div>
	);
};