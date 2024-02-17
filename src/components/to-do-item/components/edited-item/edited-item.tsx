import React from 'react';
import styles from './edited-item.module.css';

interface IEditedItem {
	value: string;
	itemChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
	editedItemBlurHandler: (e: React.FocusEvent<HTMLInputElement>) => void;
}

export const EditedItem: React.FC<IEditedItem> = props => {
	const { value, editedItemBlurHandler, itemChangeHandler } = props;

	return (
		<input
			className={styles.editedItem}
			type="text"
			autoFocus={true}
			value={value}
			onChange={e => itemChangeHandler(e)}
			onBlur={e => editedItemBlurHandler(e)}
		></input>
	);
};
