import { useState } from 'react';
import styles from './edited-item.module.css';

export const EditedItem = ({
	id,
	text,
	setIsEdited,
	requestUpdateToDo,
	requestDeleteToDo,
}) => {
	const [value, setValue] = useState(text || '');

	const onEditedItemChange = ({ target }) => {
		setValue(target.value);
	};

	const onEditedItemBlur = () => {
		requestUpdateToDo(id, { text: value });
		value.length > 0 ? setIsEdited(false) : requestDeleteToDo(id);
	};

	return (
		<input
			className={styles.editedItem}
			type="text"
			value={value}
			autoFocus={true}
			onChange={onEditedItemChange}
			onBlur={onEditedItemBlur}
		></input>
	);
};
