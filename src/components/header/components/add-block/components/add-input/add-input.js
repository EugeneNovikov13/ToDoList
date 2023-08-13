import { useDispatch, useSelector } from 'react-redux';
import { selectorActiveAddInput } from '../../../../../../redux/selectors';
import styles from './add-input.module.css';
import { setActiveAddInput } from '../../../../../../redux/actions/header';

export const AddInput = ({ value, ...rest }) => {
	const dispatch = useDispatch();

	const activeAddInput = useSelector(selectorActiveAddInput);

	return (
		<input
			className={activeAddInput ? `${styles.activeAddInput}` : `${styles.addInput}`}
			type="text"
			placeholder="Добавить..."
			value={value}
			onFocus={() => dispatch(setActiveAddInput(true))}
			{...rest}
		></input>
	);
};
