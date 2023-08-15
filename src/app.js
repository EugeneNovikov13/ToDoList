import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Header, ToDoItem } from './components';
import { sortToDosByOrderIndex } from './utils/utils';
import { selectorSorted, selectorToDoList } from './redux/selectors';
import { loadDatabaseAsync, updateTodo } from './redux/actions/to-do-list';
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

	const onDragStart = (id, item) => {
		const dragItemIdObj = { id: `${id}` };
		setDragItem({ ...dragItemIdObj, ...item });
	};

	const onDragOver = e => {
		e.preventDefault();
	};

	const onDrop = (e, id, item) => {
		e.preventDefault();

		if (id === dragItem.id) return;

		const newDragToDoObj = {
			orderIndex: item.orderIndex,
		};

		const newDropToDoObj = {
			orderIndex: dragItem.orderIndex,
		};
		setIsDraggable(false);
		dispatch(updateTodo(dragItem.id, newDragToDoObj));
		dispatch(updateTodo(id, newDropToDoObj));
		setIsDraggable(true);
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
								draggable={false}
								onDragStart={() => onDragStart(id, todo)}
								onDragOver={onDragOver}
								onDrop={e => onDrop(e, id, todo)}
							/>
						))
				: Object.entries(toDoList)
						.sort((...args) => sortToDosByOrderIndex('orderIndex', ...args))
						.map(([id, todo]) => (
							<ToDoItem
								key={id}
								id={id}
								item={todo}
								draggable={isDraggable}
								onDragStart={() => onDragStart(id, todo)}
								onDragOver={onDragOver}
								onDrop={e => onDrop(e, id, todo)}
							/>
						))}
		</div>
	);
};
