import { useState } from 'react';
import styles from './checkbox.module.css';

export const Checkbox = ({ id, completed, requestUpdateToDo }) => {
	const [checkedState, setCheckedState] = useState(completed);

	const onCheckboxClick = () => {
		setCheckedState(!checkedState);
		requestUpdateToDo(id, { completed: !checkedState });
	};

	return (
		<div
			className={completed ? `${styles.checkboxChecked}` : `${styles.checkbox}`}
			onClick={onCheckboxClick}
		></div>
	);
};
