import React from 'react';
import styles from './to-do-text.module.css';

interface IToDoText {
	onClick: () => void;
	children: string;
}

export const ToDoText: React.FC<IToDoText> = ({ onClick, children }) => {
	return (
		<div className={styles.todoText} onClick={onClick}>
			{children}
		</div>
	);
};
