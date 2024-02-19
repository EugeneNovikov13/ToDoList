import React from 'react';
import styles from './checkbox.module.css';

interface ICheckbox {
	completed: boolean;
	changeCheckbox: () => void;
}

export const Checkbox: React.FC<ICheckbox> = ({ completed, changeCheckbox }) => {
	return (
		<div
			className={completed ? `${styles.checkboxChecked}` : `${styles.checkbox}`}
			onClick={changeCheckbox}
		></div>
	);
};
