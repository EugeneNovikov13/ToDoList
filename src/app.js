import { useState } from 'react';
import { AppContext } from './context';
import {
	useRequestGetToDos,
	useRequestAddToDo,
	useRequestUpdateToDo,
	useRequestDeleteToDo,
} from './hooks';
import { ToDoItem, Header } from './components';
import { sortToDosByOrderIndex } from './utils/utils';
import styles from './app.module.css';

export const App = () => {
	const [refreshList, setRefreshList] = useState(false);
	const [isDraggable, setIsDraggable] = useState(true);
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
		requestUpdateToDo: requestUpdateToDo,
	};

	return (
		<AppContext.Provider
			value={{
				toDoList: toDoList,
				setToDoList: setToDoList,
				setSorted: setSorted,
				requestAddToDo: requestAddToDo,
				requestDeleteToDo: requestDeleteToDo,
			}}
		>
			<div className={styles.todoList}>
				<Header sorted={sorted} />

				{sorted
					? Object.entries(toDoList)
							.sort((...args) => sortToDosByOrderIndex('text', ...args))
							.map(([id, todo]) => (
								<ToDoItem
									key={id}
									id={id}
									item={todo}
									{...toDoItemProps}
									isDraggable={false}
								/>
							))
					: Object.entries(toDoList)
							.sort((...args) =>
								sortToDosByOrderIndex('orderIndex', ...args),
							)
							.map(([id, todo]) => (
								<ToDoItem
									key={id}
									id={id}
									item={todo}
									{...toDoItemProps}
								/>
							))}
			</div>
		</AppContext.Provider>
	);
};
