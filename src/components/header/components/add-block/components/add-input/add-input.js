import { useSelector } from 'react-redux';
import { selectorActiveAddInput } from '../../../../../../redux/selectors';
import styles from './add-input.module.css';

export const AddInput = ({ ...rest }) => {
	const activeAddInput = useSelector(selectorActiveAddInput);

	return (
		<input
			className={activeAddInput ? `${styles.activeAddInput}` : `${styles.addInput}`}
			type="text"
			placeholder="Добавить..."
			{...rest}
		></input>
	);
};
