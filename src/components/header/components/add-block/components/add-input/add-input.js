import { useContext } from 'react';
import { HeaderContext } from '../../../../../../context';
import styles from './add-input.module.css';

export const AddInput = ({ value, setValue, setIsEmptyValue, onAddButtonClick }) => {
	const { activeAddInput, setActiveAddInput } = useContext(HeaderContext);

	const onChange = ({ target }) => {
		target.value.length > 0 ? setIsEmptyValue(false) : setIsEmptyValue(true);
		setValue(target.value);
	};

	const onEnterKeyUp = e => {
		if (e.key === 'Enter') {
			onAddButtonClick();
		}
	};

	return (
		<input
			className={activeAddInput ? `${styles.activeAddInput}` : `${styles.addInput}`}
			type="text"
			placeholder="Добавить..."
			value={value}
			onFocus={() => setActiveAddInput(true)}
			onChange={onChange}
			onKeyUp={e => onEnterKeyUp(e)}
		></input>
	);
};
