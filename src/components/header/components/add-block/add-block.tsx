import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setActiveAddInput } from '../../../../redux/actions/header';
import { addTodo } from '../../../../redux/actions/to-do-list';
import { AddButton, AddInput } from './components';

export const AddBlock: React.FC = () => {
	const dispatch = useDispatch();

	const [addInputValue, setAddInputValue] = useState<string>('');

	const onAddButtonClick = () => {
		if (!addInputValue.length) return;
		dispatch(addTodo(addInputValue));
		setAddInputValue('');
	};

	const onEnterKeyUp: React.KeyboardEventHandler<HTMLInputElement> = e => {
		if (e.key === 'Enter') {
			onAddButtonClick();
		}
	};

	return (
		<>
			<AddButton disabled={!addInputValue.length} onClick={onAddButtonClick} />
			<AddInput
				value={addInputValue}
				onKeyUp={e => onEnterKeyUp(e)}
				onChange={e => setAddInputValue(e.target.value)}
				onFocus={() => dispatch(setActiveAddInput(true))}
			/>
		</>
	);
};
