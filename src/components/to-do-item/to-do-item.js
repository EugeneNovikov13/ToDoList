import { Checkbox, Delete, EditedItem, ToDoText } from './components';
import { useState } from 'react';
import { deleteTodo, updateTodo } from '../../redux/actions/to-do-list';
import { useDispatch } from 'react-redux';
import styles from './to-do-item.module.css';

export const ToDoItem = props => {
	const dispatch = useDispatch();

	const { id, item, dragItem, setDragItem, isDraggable, setIsDraggable } = props;

	const { text, completed } = item;

	const [isEdited, setIsEdited] = useState(false);

	const [checkedState, setCheckedState] = useState(completed);

	const [editedItemText, setEditedItemText] = useState(text || '');

	const onDragStart = () => {
		const dragItemIdObj = { id: `${id}` };
		setDragItem({ ...dragItemIdObj, ...item });
	};

	const onDragOver = e => {
		e.preventDefault();
	};

	const onDrop = e => {
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

	const onCheckboxClick = () => {
		setCheckedState(!checkedState);
		dispatch(updateTodo(id, { completed: !checkedState }));
	};

	const onEditedItemChange = ({ target }) => {
		setEditedItemText(target.value);
	};

	const onEditedItemBlur = ({ target }) => {
		if (target.value.length > 0) {
			const upperCaseVal = target.value[0].toUpperCase() + target.value.slice(1);
			dispatch(updateTodo(id, { text: upperCaseVal }));
			setIsEdited(false);
		} else {
			dispatch(deleteTodo(id));
		}
	};

	return (
		<div
			className={styles.todoItem}
			draggable={isDraggable}
			onDragStart={onDragStart}
			onDragOver={onDragOver}
			onDrop={e => onDrop(e)}
		>
			<Checkbox completed={completed} onClick={onCheckboxClick} />
			{isEdited ? (
				<EditedItem
					value={editedItemText}
					onChange={onEditedItemChange}
					onBlur={onEditedItemBlur}
				/>
			) : (
				<ToDoText onClick={() => setIsEdited(true)}>{text}</ToDoText>
			)}
			<Delete onClick={() => dispatch(deleteTodo(id))} />
		</div>
	);
};
