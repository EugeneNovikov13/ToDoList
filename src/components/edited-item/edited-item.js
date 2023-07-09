import { useState } from 'react';
import styles from './edited-item.module.css';
import { useNavigate } from 'react-router-dom';

export const EditedItem = ({ id, text, setIsEdited, requestUpdateTextToDo, requestDeleteToDo }) => {

	const [value, setValue] = useState(text || '');

	const navigate = useNavigate();

	const onEditedItemChange = ({ target }) => {
		setValue(target.value);
	};

	const onEditedItemBlur = () => {
		if (value.length > 0) {
			requestUpdateTextToDo(id, value);
			setIsEdited(false);
		} else {
			requestDeleteToDo(id);
			navigate('/');
		}
	};

	return (
		<input
			className={styles.editedItem}
			type='text'
			value={value}
			autoFocus={true}
			onChange={onEditedItemChange}
			onBlur={onEditedItemBlur}></input>
	);
};