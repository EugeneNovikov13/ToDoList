import React from 'react';
import styles from './add-button.module.css';

interface IAddButton {
	disabled: boolean;
	onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const AddButton: React.FC<IAddButton> = props => {
	return (
		<button className={styles.addButton} {...props}>
			+
		</button>
	);
};
