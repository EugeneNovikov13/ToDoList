import { useState, useContext } from 'react';
import { AppContext } from '../../../../context';
import styles from './edited-item.module.css';

export const EditedItem = ({ id, text, setIsEdited, requestUpdateToDo }) => {
	const { requestDeleteToDo } = useContext(AppContext);

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
