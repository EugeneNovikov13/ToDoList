import { Checkbox, Delete, EditedItem, ToDoText } from './components';
import { useState } from 'react';
import { updateTodo } from '../../redux/actions/to-do-list';
import { useDispatch } from 'react-redux';
import styles from './to-do-item.module.css';

export const ToDoItem = props => {
	const dispatch = useDispatch();

	const { id, item, dragItem, setDragItem, isDraggable, setIsDraggable } = props;

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
		dispatch(updateTodo(dragItem.id, newDragToDoObj));
		dispatch(updateTodo(dropItemId, newDropToDoObj));
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
			<Checkbox id={id} completed={completed} />
			{isEdited ? (
				<EditedItem id={id} text={text} setIsEdited={setIsEdited} />
			) : (
				<ToDoText text={text} setIsEdited={setIsEdited} />
			)}
			<Delete id={id} />
		</div>
	);
};
