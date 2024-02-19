import React from 'react';
import styles from './delete.module.css';

interface IDeleteProp {
	removeToDo: () => void;
}

export const Delete: React.FC<IDeleteProp> = ({ removeToDo }) => {
	return <div className={styles.delete} onClick={removeToDo}></div>;
};
