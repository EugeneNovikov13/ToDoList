import { Checkbox, EditedItem, ToDoText, Delete } from './components';
import { useState } from 'react';
import styles from './to-do-item.module.css';

export const ToDoItem = props => {
	const {
		id,
		item,
		dragItem,
		setDragItem,
		isDraggable,
		setIsDraggable,
		requestUpdateToDo,
	} = props;

	const { text, completed } = item;

	const [isEdited, setIsEdited] = useState(false);

	const onDragStart = (e, id, item) => {
		const dragItemIdObj = { id: `${id}` };
		setDragItem({ ...dragItemIdObj, ...item });
	};

	const onDragOver = e => {
		e.preventDefault();
	};

	const onDrop = (e, dropItemId, dropItem) => {
		e.preventDefault();

		if (dropItemId === dragItem.id) return;

		const newDragToDoObj = {
			orderIndex: dropItem.orderIndex,
		};

		const newDropToDoObj = {
			orderIndex: dragItem.orderIndex,
		};
		setIsDraggable(false);
		requestUpdateToDo(dragItem.id, newDragToDoObj);
		requestUpdateToDo(dropItemId, newDropToDoObj);
		setIsDraggable(true);
	};

	return (
		<div
			className={styles.todoItem}
			draggable={isDraggable}
			onDragStart={e => onDragStart(e, id, item)}
			onDragOver={onDragOver}
			onDrop={e => onDrop(e, id, item)}
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
				/>
			) : (
				<ToDoText text={text} setIsEdited={setIsEdited} />
			)}
			<Delete id={id} />
		</div>
	);
};
