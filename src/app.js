import { useState } from 'react';
import { ToDoItem, AddingInput } from './components';
import {
	useRequestGetToDos,
	useRequestAddToDo,
	useRequestUpdateToDo,
	useRequestDeleteToDo,
} from './hooks';
import styles from './app.module.css';

export const App = () => {
	const [refreshList, setRefreshList] = useState(false);

	const { toDoList } = useRequestGetToDos(refreshList);

	const { requestAddToDo } = useRequestAddToDo(refreshList, setRefreshList);

	const { requestUpdateToDo, isUpdating } = useRequestUpdateToDo(
		refreshList,
		setRefreshList,
	);

	const { requestDeleteToDo, isDeleting } = useRequestDeleteToDo(
		refreshList,
		setRefreshList,
	);

	return (
		<div className={styles.todoList}>
			<AddingInput requestAddToDo={requestAddToDo} />
			{toDoList.map(({ id, text, completed }) => (
				<ToDoItem key={id} completed={completed} text={text} />
			))}
			<button disabled={isUpdating} onClick={requestUpdateToDo}>
				Сохранить
			</button>
			<button disabled={isDeleting} onClick={requestDeleteToDo}>
				Удалить запись
			</button>
		</div>
	);
};
