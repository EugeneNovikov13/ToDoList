import { useState } from 'react';
import styles from './edited-item.module.css';
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from '../../../../redux/actions/to-do-list';

export const EditedItem = ({ id, text, setIsEdited }) => {
	const dispatch = useDispatch();

	const [value, setValue] = useState(text || '');

	const onEditedItemChange = ({ target }) => {
		setValue(target.value);
	};

	const onEditedItemBlur = () => {
		if (value.length > 0) {
			const upperCaseVal = value[0].toUpperCase() + value.slice(1);
			dispatch(updateTodo(id, { text: upperCaseVal }));
			setIsEdited(false);
		} else {
			dispatch(deleteTodo(id));
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
