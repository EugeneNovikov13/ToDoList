import { useSelector } from 'react-redux';
import { selectorActiveAddInput } from '../../../../../../redux/selectors';
import styles from './add-input.module.css';
import React from 'react';

interface IAddInputProps {
	value: string;
	onKeyUp: React.KeyboardEventHandler<HTMLInputElement>;
	onChange: React.ChangeEventHandler<HTMLInputElement>;
	onFocus: React.FocusEventHandler<HTMLInputElement>;
}

export const AddInput: React.FC<IAddInputProps> = props => {
	const activeAddInput = useSelector(selectorActiveAddInput);

	return (
		<input
			className={activeAddInput ? `${styles.activeAddInput}` : `${styles.addInput}`}
			type="text"
			placeholder="Добавить..."
			{...props}
		></input>
	);
};
