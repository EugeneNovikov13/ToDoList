import styles from './adding-input.module.css';
import { useState } from 'react';

export const AddingInput = ({ activeAddInput, setActiveAddInput, requestAddToDo }) => {
	const [value, setValue] = useState('');
	const [isEmptyValue, setIsEmptyValue] = useState(true);

	const onChange = ({ target }) => {
		target.value.length > 0 ? setIsEmptyValue(false) : setIsEmptyValue(true);
		setValue(target.value);
	};

	const onEnterKeyUp = (e) => {
		if (e.key === 'Enter') {
			onAddButtonClick();
		}
	}

	const onAddButtonClick = () => {
		requestAddToDo(value);
		setValue('');
		setIsEmptyValue(true);
	};

	return (
		<>
			<button className={styles.addButton} disabled={isEmptyValue} onClick={onAddButtonClick}>
				+
			</button>
			<input
				className={activeAddInput ? `${styles.activeAddInput}` : `${styles.addInput}`}
				type="text"
				placeholder="Добавить..."
				value={value}
				onFocus={() => setActiveAddInput(true)}
				onChange={onChange}
				onKeyUp={(e) => onEnterKeyUp(e)}
			></input>
		</>
	);
};
