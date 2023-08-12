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
	const [sorted, setSorted] = useState(false);
	const [dragItem, setDragItem] = useState(null);
	const [isDraggable, setIsDraggable] = useState(true);

	const { toDoList, setToDoList } = useRequestGetToDos();

	const { requestAddToDo } = useRequestAddToDo();

	const { requestUpdateToDo } = useRequestUpdateToDo();

	const { requestDeleteToDo } = useRequestDeleteToDo();

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
