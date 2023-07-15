import { useState, useContext } from 'react';
import { AppContext } from '../../../../context';
import { AddInput, AddButton } from './components';

export const AddBlock = () => {
	const { toDoList, requestAddToDo } = useContext(AppContext);

	const [value, setValue] = useState('');
	const [isEmptyValue, setIsEmptyValue] = useState(true);

	const maxOrderIndex = Math.max(...toDoList.map(todo => todo.orderIndex));

	const onAddButtonClick = () => {
		if (isEmptyValue) return;
		requestAddToDo(value, maxOrderIndex + 1);
		setValue('');
		setIsEmptyValue(true);
	};

	return (
		<>
			<AddButton isEmptyValue={isEmptyValue} onAddButtonClick={onAddButtonClick} />
			<AddInput
				value={value}
				setValue={setValue}
				setIsEmptyValue={setIsEmptyValue}
				onAddButtonClick={onAddButtonClick}
			/>
		</>
	);
};
