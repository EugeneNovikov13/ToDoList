import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Header, ToDoItem } from './components';
import { sortToDosByOrderIndex } from './utils/utils';
import { selectorSorted, selectorToDoList } from './redux/selectors';
import { loadDatabaseAsync, updateTodo } from './redux/actions/to-do-list';
import styles from './app.module.css';
import { IToDo, IToDoList } from './types';

export const App = () => {
	const sorted = useSelector(selectorSorted);
	const [dragItem, setDragItem] = useState(null);
	const [isDraggable, setIsDraggable] = useState(true);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(loadDatabaseAsync);
	}, []);

	const toDoList: IToDoList = useSelector(selectorToDoList);

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
		<div className={styles.toDoList}>
			<Header />

			{sorted
				? Object.entries(toDoList)
						.sort((toDoA: [string, IToDo], toDoB: [string, IToDo]) =>
							sortToDosByOrderIndex('text', toDoA[1], toDoB[1]),
						)
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
						.sort((toDoA: [string, IToDo], toDoB: [string, IToDo]) =>
							sortToDosByOrderIndex('orderIndex', toDoA[1], toDoB[1]),
						)
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
