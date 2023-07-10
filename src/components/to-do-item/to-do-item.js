import { Link } from 'react-router-dom';
import { Checkbox, ToDoText } from '../index';
import styles from './to-do-item.module.css';

export const ToDoItem = props => {
	const { id, text, completed, setSorted } = props;

	return (
		<div className={styles.todoItem}>
			<Link
				className={styles.toDoLink}
				to={`todos/${id}`}
				onClick={() => setSorted(false)}
			>
				<Checkbox id={id} completed={completed} edited={false} />
				<ToDoText text={text} />
			</Link>
		</div>
	);
};
