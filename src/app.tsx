import React, { useEffect, useState } from 'react';
import { useActions, useTypedSelector } from './hooks';
import { sortToDosByOrderIndex } from './utils/utils';
import { Header, ToDoItem } from './components';
import { IToDo, IToDoList, IToDoWithId } from './types';
import styles from './app.module.css';

export const App: React.FC = () => {
	const sorted = useTypedSelector(state => state.headerState.sorted);
	const [dragItem, setDragItem] = useState<IToDoWithId | null>(null);
	const [isDraggable, setIsDraggable] = useState(true);
	const { loadDatabaseAsync, updateTodo } = useActions();

	useEffect(() => {
		loadDatabaseAsync();
	}, []);

	const toDoList: IToDoList = useTypedSelector(useState => useState.toDoListState);

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
		updateTodo(dragItem.id, newDragToDoObj);
		updateTodo(id, newDropToDoObj);
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
