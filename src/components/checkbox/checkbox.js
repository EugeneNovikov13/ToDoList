import styles from './checkbox.module.css';

export const Checkbox = ({ id, completed, requestUpdateCheckedToDo }) => {
	const onCheckboxClick = () => {
		requestUpdateCheckedToDo(id, !completed);
	};

	return (
		<div
			className={completed ? `${styles.checkboxChecked}` : `${styles.checkbox}`}
			onClick={onCheckboxClick}
		></div>
	);
};
