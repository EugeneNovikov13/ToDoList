import styles from './adding-input.module.css';
import { useState } from 'react';

export const AddingInput = ({ requestAddToDo }) => {
	const [value, setValue] = useState('');
	const [isCreating, setIsCreating] = useState(false);

	const onChange = ({ target }) => {
		target.value.length > 0 ? setIsCreating(false) : setIsCreating(true);
		setValue(target.value);
	};

	const onClick = () => {
		requestAddToDo(value);
		setValue('');
	};

	return (
		<div>
			<input
				className={styles.newToDoInput}
				id="newToDo"
				type="text"
				name="newToDo"
				placeholder="Новое дело"
				value={value}
				onChange={onChange}
			></input>
			<button disabled={isCreating} onClick={onClick}>
				Добавить запись
			</button>
		</div>
	);
};
