import { useState } from 'react';
import {
	useRequestGetToDos,
	useRequestAddToDo,
	useRequestUpdateToDo,
	useRequestDeleteToDo,
} from './hooks';
import { ToDoItem, AddingInput, Search, SortButton } from './components';
import { sortToDosByOrderIndex } from './utils/utils';
import styles from './app.module.css';

export const App = () => {
	const [refreshList, setRefreshList] = useState(false);
	const [isDraggable, setIsDraggable] = useState(true);
	const [activeAddInput, setActiveAddInput] = useState(true);
	const [sorted, setSorted] = useState(false);
	const [dragItem, setDragItem] = useState(null);

	const { toDoList, setToDoList } = useRequestGetToDos(refreshList);

	const { requestAddToDo } = useRequestAddToDo(refreshList, setRefreshList);

	const { requestUpdateToDo } = useRequestUpdateToDo(refreshList, setRefreshList);

	const { requestDeleteToDo } = useRequestDeleteToDo(refreshList, setRefreshList);

	const toDoItemProps = {
		dragItem: dragItem,
		setDragItem: setDragItem,
		isDraggable: isDraggable,
		setIsDraggable: setIsDraggable,
		requestDeleteToDo: requestDeleteToDo,
		requestUpdateToDo: requestUpdateToDo,
	};

	return (
		<div className={styles.todoList}>
			<div className={styles.buttonWrapper}>
				<AddingInput
					toDoListLength={toDoList.length}
					activeAddInput={activeAddInput}
					setActiveAddInput={setActiveAddInput}
					requestAddToDo={requestAddToDo}
				/>

				<Search
					setToDoList={setToDoList}
					activeAddInput={activeAddInput}
					setActiveAddInput={setActiveAddInput}
				/>
				<SortButton sorted={sorted} setSorted={setSorted} />
			</div>

			{sorted
				? toDoList
						.sort((...args) => sortToDosByOrderIndex('text', ...args))
						.map(todo => (
							<ToDoItem
								key={todo.id}
								item={todo}
								{...toDoItemProps}
								isDraggable={false}
							/>
						))
				: toDoList
						.sort((...args) => sortToDosByOrderIndex('orderIndex', ...args))
						.map(todo => (
							<ToDoItem key={todo.id} item={todo} {...toDoItemProps} />
						))}
		</div>
	);
};
