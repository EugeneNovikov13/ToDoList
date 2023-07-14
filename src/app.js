import { useState } from 'react';
import {
	useRequestGetToDos,
	useRequestAddToDo,
	useRequestUpdateToDo,
	useRequestDeleteToDo,
} from './hooks';
import { ToDoItem, AddingInput, Search, SortButton } from './components';
import styles from './app.module.css';

export const App = () => {
	const [refreshList, setRefreshList] = useState(false);
	const [activeAddInput, setActiveAddInput] = useState(true);
	const [sorted, setSorted] = useState(false);
	const [dragItem, setDragItem] = useState(null);

	const { toDoList, setToDoList, requestGetToDos } = useRequestGetToDos(refreshList);

	const { requestAddToDo } = useRequestAddToDo(refreshList, setRefreshList);

	const { requestUpdateToDo } = useRequestUpdateToDo(refreshList, setRefreshList);

	const { requestDeleteToDo } = useRequestDeleteToDo(refreshList, setRefreshList);

	return (
		<div className={styles.todoList}>
			<div className={styles.buttonWrapper}>
				<AddingInput
					activeAddInput={activeAddInput}
					setActiveAddInput={setActiveAddInput}
					requestAddToDo={requestAddToDo}
				/>

				<Search
					setToDoList={setToDoList}
					activeAddInput={activeAddInput}
					setActiveAddInput={setActiveAddInput}
				/>
				<SortButton
					requestGetToDos={requestGetToDos}
					sorted={sorted}
					setSorted={setSorted}
				/>
			</div>

			{toDoList.map(todo => (
				<ToDoItem
					key={todo.id}
					item={todo}
					dragItem={dragItem}
					setDragItem={setDragItem}
					toDoList={toDoList}
					requestDeleteToDo={requestDeleteToDo}
					requestUpdateToDo={requestUpdateToDo}
				/>
			))}
		</div>
	);
};
