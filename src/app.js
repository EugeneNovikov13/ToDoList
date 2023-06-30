import { useEffect, useState } from 'react';
import { ToDoItem } from './components';
import styles from './app.module.css';

export const App = () => {
	const [toDo, setToDo] = useState([]);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/todos')
			.then(loadedData => loadedData.json())
			.then(loadedToDos => {
				setToDo(loadedToDos);
			});
	}, []);

	return (
		<div className={styles.todoList}>
			<h4 className={styles.header}>Запланированные дела</h4>
			{toDo.map(
				({ userId, id, title, completed }) =>
					userId === 1 && (
						<div key={id} className={styles.todoItem}>
							<ToDoItem completed={completed} title={title} />
						</div>
					),
			)}
		</div>
	);
};
