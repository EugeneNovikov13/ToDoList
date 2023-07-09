import { Checkbox, ToDoText } from '../index';
import styles from './to-do-item.module.css';

export const ToDoItem = props => {
	const { id, text, completed } = props;

	return (
		<div className={styles.todoItem}>
			<Checkbox
				id={id}
				completed={completed}
				edited={false}
			/>
			<ToDoText
				id={id}
				text={text}
			/>
		</div>
	);
};
