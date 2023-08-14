import styles from './delete.module.css';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../../../../redux/actions/to-do-list';

export const Delete = ({ id }) => {
	const dispatch = useDispatch();

	return <div className={styles.delete} onClick={() => dispatch(deleteTodo(id))}></div>;
};
