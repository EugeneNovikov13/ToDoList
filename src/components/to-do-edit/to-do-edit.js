import styles from './to-do-edit.module.css';
import { useState } from 'react';
import { Checkbox } from '../checkbox/checkbox';
import { EditedItem } from '../edited-item/edited-item';
import { Delete } from '../delete/delete';
import { EditedToDoText } from '../edited-to-do-text/edited-to-do-text';

export const ToDoEdit = props => {
	const { id, text, completed, requestDeleteToDo, requestUpdateTextToDo, requestUpdateCheckedToDo } = props;

	const [isEdited, setIsEdited] = useState(false);

	return (
		<div className={styles.todoEdit}>
			<Checkbox
				id={id}
				completed={completed}
				requestUpdateCheckedToDo={requestUpdateCheckedToDo}
				edited={true}
			/>
			{isEdited ?
				<EditedItem
					id={id}
					text={text}
					setIsEdited={setIsEdited}
					requestUpdateTextToDo={requestUpdateTextToDo}
					requestDeleteToDo={requestDeleteToDo}
				/> :
				<EditedToDoText
					text={text}
					setIsEdited={setIsEdited}
				/>}
			<Delete
				id={id}
				requestDeleteToDo={requestDeleteToDo}
			/>
		</div>
	);
};