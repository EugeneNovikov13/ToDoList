import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setActiveAddInput } from '../../../../redux/actions/header';
import { addTodo } from '../../../../redux/actions/to-do-list';
import { AddButton, AddInput } from './components';

export const AddBlock = () => {
	const dispatch = useDispatch();

	const [addInputValue, setAddInputValue] = useState('');

	const onAddButtonClick = () => {
		if (!addInputValue.length) return;
		dispatch(addTodo(addInputValue));
		setAddInputValue('');
	};

	const onEnterKeyUp = e => {
		if (e.key === 'Enter') onAddButtonClick();
	};

	const onChange = ({ target }) => {
		setAddInputValue(target.value);
	};

	return (
		<>
			<AddButton disabled={!addInputValue.length} onClick={onAddButtonClick} />
			<AddInput
				value={addInputValue}
				onKeyUp={e => onEnterKeyUp(e)}
				onChange={onChange}
				onFocus={() => dispatch(setActiveAddInput(true))}
			/>
		</>
	);
};
