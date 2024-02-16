import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Header, ToDoItem } from './components';
import { sortToDosByOrderIndex } from './utils/utils';
import { selectorSorted, selectorToDoList } from './redux/selectors';
import { loadDatabaseAsync, updateTodo } from './redux/actions/to-do-list';
import styles from './app.module.css';
import { IToDo, IToDoList, IToDoWithId } from './types';

export const App: React.FC = () => {
	const sorted = useSelector(selectorSorted);
	const [dragItem, setDragItem] = useState<IToDoWithId>();
	const [isDraggable, setIsDraggable] = useState<boolean>(true);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(loadDatabaseAsync);
	}, []);

	const toDoList: IToDoList = useSelector(selectorToDoList);

	const DragStartHandler = (id: string, item: IToDo) => {
		const dragItemIdObj = { id: `${id}` };
		setDragItem({ ...dragItemIdObj, ...item });
	};

	const DragOverHandler = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault();
	};

	const DropHandler = (e: React.DragEvent<HTMLDivElement>, id: string, item: IToDo) => {
		e.preventDefault();

		if (!dragItem) return;

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
						.sort((toDoA, toDoB) =>
							sortToDosByOrderIndex('text', toDoA[1], toDoB[1]),
						)
						.map(([id, todo]) => (
							<ToDoItem
								key={id}
								id={id}
								item={todo}
								draggable={false}
								onDragStart={() => DragStartHandler(id, todo)}
								onDragOver={DragOverHandler}
								onDrop={e => DropHandler(e, id, todo)}
							/>
						))
				: Object.entries(toDoList)
						.sort((toDoA, toDoB) =>
							sortToDosByOrderIndex('orderIndex', toDoA[1], toDoB[1]),
						)
						.map(([id, todo]) => (
							<ToDoItem
								key={id}
								id={id}
								item={todo}
								draggable={isDraggable}
								onDragStart={() => DragStartHandler(id, todo)}
								onDragOver={DragOverHandler}
								onDrop={e => DropHandler(e, id, todo)}
							/>
						))}
		</div>
	);
};
