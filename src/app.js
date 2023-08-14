import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Header, ToDoItem } from './components';
import { sortToDosByOrderIndex } from './utils/utils';
import { selectorSorted, selectorToDoList } from './redux/selectors';
import { loadDatabaseAsync } from './redux/actions/to-do-list';
import styles from './app.module.css';

export const App = () => {
	const sorted = useSelector(selectorSorted);
	const [dragItem, setDragItem] = useState(null);
	const [isDraggable, setIsDraggable] = useState(true);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(loadDatabaseAsync);
	}, []);

	const toDoList = useSelector(selectorToDoList);

	const toDoItemProps = {
		dragItem: dragItem,
		setDragItem: setDragItem,
		isDraggable: isDraggable,
		setIsDraggable: setIsDraggable,
	};

	return (
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
						.sort((...args) => sortToDosByOrderIndex('orderIndex', ...args))
						.map(([id, todo]) => (
							<ToDoItem key={id} id={id} item={todo} {...toDoItemProps} />
						))}
		</div>
	);
};
