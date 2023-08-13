import { useState, useContext } from 'react';
import { AddInput, AddButton } from './components';
import { useDispatch, useSelector } from 'react-redux';
import { selectorToDoList } from '../../../../redux/selectors';
import { addTodo } from '../../../../redux/actions/to-do-list/add-todo';
import { maxOrderIndex } from '../../../../utils/utils';

export const AddBlock = () => {
	const dispatch = useDispatch();

	const toDoList = useSelector(selectorToDoList);

	const [value, setValue] = useState('');
	const [isEmptyValue, setIsEmptyValue] = useState(true);

	const onAddButtonClick = () => {
		if (isEmptyValue) return;
		const orderIndex = maxOrderIndex(toDoList);
		dispatch(addTodo(value, orderIndex));
		setValue('');
		setIsEmptyValue(true);
	};

	const onEnterKeyUp = (e) => {
		if (e.key === 'Enter') onAddButtonClick();
	}

	const onChange = ({ target }) => {
		target.value.length > 0 ? setIsEmptyValue(false) : setIsEmptyValue(true);
		setValue(target.value);
	};

	return (
		<>
			<AddButton isEmptyValue={isEmptyValue} onClick={onAddButtonClick} />
			<AddInput
				value={value}
				onKeyUp={(e) => onEnterKeyUp(e)}
				onChange={onChange}
			/>
		</>
	);
};
