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
		if (value.length > 0) {
			const upperCaseVal = value[0].toUpperCase() + value.slice(1);
			requestUpdateToDo(id, { text: upperCaseVal });
			setIsEdited(false);
		} else {
			requestDeleteToDo(id);
		}
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
