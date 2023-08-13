import { useEffect, useState } from 'react';
import { AppContext } from './context';
import {
	useRequestUpdateToDo,
} from './hooks';
import { ToDoItem, Header } from './components';
import { sortToDosByOrderIndex } from './utils/utils';
import styles from './app.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectorSorted, selectorToDoList } from './redux/selectors';
import { loadDatabaseAsync } from './redux/actions/to-do-list';

export const App = () => {
	const sorted = useSelector(selectorSorted);
	const [dragItem, setDragItem] = useState(null);
	const [isDraggable, setIsDraggable] = useState(true);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(loadDatabaseAsync);
	}, []);

	const toDoList = useSelector(selectorToDoList);

	const { requestUpdateToDo } = useRequestUpdateToDo();

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
				// requestDeleteToDo: requestDeleteToDo,
			}}
		>
			<div className={styles.todoList}>
				<Header />

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
