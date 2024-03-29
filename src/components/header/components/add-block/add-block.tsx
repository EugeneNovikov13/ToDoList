import React, { useState } from 'react';
import { useActions } from '../../../../hooks';
import { AddButton, AddInput } from './components';

export const AddBlock: React.FC = () => {
	const { addTodo, setActiveAddInput } = useActions();

	const [addInputValue, setAddInputValue] = useState('');

	const onAddButtonClick = () => {
		if (!addInputValue.length) return;
		addTodo(addInputValue);
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
				onFocus={() => setActiveAddInput(true)}
			/>
		</>
	);
};
