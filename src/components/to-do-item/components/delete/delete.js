import { useContext } from 'react';
import { AppContext } from '../../../../context';
import styles from './delete.module.css';

export const Delete = ({ id }) => {
	const { requestDeleteToDo } = useContext(AppContext);

	const onDeleteClick = () => {
		requestDeleteToDo(id);
	};

	return <div className={styles.delete} onClick={onDeleteClick}></div>;
};
