import { Checkbox, EditedItem, ToDoText, Delete } from '../index';
import { useState } from 'react';
import styles from './to-do-item.module.css';

export const ToDoItem = props => {
	const {
		item,
		dragItem,
		setDragItem,
		toDoList,
		requestDeleteToDo,
		requestUpdateToDo,
	} = props;

	const { id, text, completed } = item;

	const [isEdited, setIsEdited] = useState(false);

	const onDragStart = (e, todo) => {
		setDragItem(todo);
	};

	const onDragOver = e => {
		e.preventDefault();
	};

	const onDrop = (e, item) => {
		e.preventDefault();
		let dropItem = item;

		const dragIndex = toDoList.findIndex(todo => todo === dragItem);
		const dropIndex = toDoList.findIndex(todo => todo === dropItem);

		const draggedArray = [...toDoList];
		[draggedArray[dragIndex], draggedArray[dropIndex]] = [
			draggedArray[dropIndex],
			draggedArray[dragIndex],
		];
		console.log(draggedArray);
		requestUpdateToDo('', draggedArray);

		setDragItem(null);
	};

	return (
		<div
			className={styles.todoItem}
			draggable={true}
			onDragStart={e => onDragStart(e, item)}
			onDragOver={onDragOver}
			onDrop={e => onDrop(e, item)}
		>
			<Checkbox
				id={id}
				completed={completed}
				requestUpdateToDo={requestUpdateToDo}
			/>
			{isEdited ? (
				<EditedItem
					id={id}
					text={text}
					setIsEdited={setIsEdited}
					requestUpdateToDo={requestUpdateToDo}
					requestDeleteToDo={requestDeleteToDo}
				/>
			) : (
				<ToDoText text={text} setIsEdited={setIsEdited} />
			)}
			<Delete id={id} requestDeleteToDo={requestDeleteToDo} />
		</div>
	);
};
