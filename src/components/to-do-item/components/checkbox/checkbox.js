import { useState } from 'react';
import styles from './checkbox.module.css';
import { useDispatch } from 'react-redux';
import { updateTodo } from '../../../../redux/actions/to-do-list';

export const Checkbox = ({ id, completed }) => {
	const dispatch = useDispatch();

	const [checkedState, setCheckedState] = useState(completed);

	const onCheckboxClick = () => {
		setCheckedState(!checkedState);
		dispatch(updateTodo(id, { completed: !checkedState }));
	};

	return (
		<div
			className={completed ? `${styles.checkboxChecked}` : `${styles.checkbox}`}
			onClick={onCheckboxClick}
		></div>
	);
};
