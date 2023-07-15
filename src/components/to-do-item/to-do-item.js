import { Checkbox, EditedItem, ToDoText, Delete } from '../index';
import { useState } from 'react';
import styles from './to-do-item.module.css';

export const ToDoItem = props => {
	const {
		item,
		dragItem,
		setDragItem,
		isDraggable,
		setIsDraggable,
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

	const onDrop = (e, dropItem) => {
		e.preventDefault();

		if (dropItem === dragItem) return;

		const newDragToDoObj = {
			orderIndex: dropItem.orderIndex,
		};

		const newDropToDoObj = {
			orderIndex: dragItem.orderIndex,
		};
		setIsDraggable(false);
		requestUpdateToDo(dragItem.id, newDragToDoObj);
		requestUpdateToDo(dropItem.id, newDropToDoObj);
		setIsDraggable(true);
	};

	return (
		<div
			className={styles.todoItem}
			draggable={isDraggable}
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
