import React from 'react';
import { useTypedSelector } from '../../../../../../hooks';
import styles from './add-input.module.css';

interface IAddInputProps {
	value: string;
	onKeyUp: React.KeyboardEventHandler<HTMLInputElement>;
	onChange: React.ChangeEventHandler<HTMLInputElement>;
	onFocus: React.FocusEventHandler<HTMLInputElement>;
}

export const AddInput: React.FC<IAddInputProps> = props => {
	const activeAddInput = useTypedSelector(state => state.headerState.activeAddInput);

	return (
		<input
			className={activeAddInput ? `${styles.activeAddInput}` : `${styles.addInput}`}
			type="text"
			placeholder="Добавить..."
			{...props}
		></input>
	);
};
