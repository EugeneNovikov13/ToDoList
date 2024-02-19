import { Checkbox, Delete, EditedItem, ToDoText } from './components';
import React, { useState } from 'react';
import { useActions } from '../../hooks';
import { IToDo } from '../../types';
import styles from './to-do-item.module.css';

interface IToDoItemProps {
	id: string;
	item: IToDo;
	draggable: boolean;
	onDragStart: React.DragEventHandler<HTMLDivElement>;
	onDragOver: React.DragEventHandler<HTMLDivElement>;
	onDrop: React.DragEventHandler<HTMLDivElement>;
}

export const ToDoItem: React.FC<IToDoItemProps> = props => {
	const {
		id,
		item: { text, completed },
		...rest
	} = props;

	const { updateTodo, deleteTodo } = useActions();

	const [isEdited, setIsEdited] = useState(false);
	const [checkedState, setCheckedState] = useState(completed);
	const [editedItemText, setEditedItemText] = useState(text || '');

	const checkboxClickHandler = () => {
		setCheckedState(!checkedState);
		updateTodo(id, { completed: !checkedState });
	};

	const itemChangeHandler = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
		setEditedItemText(target.value);
	};

	const editedItemBlurHandler = ({ target }: React.FocusEvent<HTMLInputElement>) => {
		if (target.value.length > 0) {
			const upperCaseVal = target.value[0].toUpperCase() + target.value.slice(1);
			updateTodo(id, { text: upperCaseVal });
			setIsEdited(false);
		} else {
			deleteTodo(id);
		}
	};

	return (
		<div className={styles.todoItem} {...rest}>
			<Checkbox completed={completed} changeCheckbox={checkboxClickHandler} />
			{isEdited ? (
				<EditedItem
					value={editedItemText}
					itemChangeHandler={itemChangeHandler}
					editedItemBlurHandler={editedItemBlurHandler}
				/>
			) : (
				<ToDoText onClick={() => setIsEdited(true)}>{text}</ToDoText>
			)}
			<Delete removeToDo={() => deleteTodo(id)} />
		</div>
	);
};
