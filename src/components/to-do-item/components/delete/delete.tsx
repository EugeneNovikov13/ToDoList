import React from 'react';
import styles from './delete.module.css';

interface IDeleteProp {
	onClick: React.MouseEventHandler<HTMLDivElement>;
}

export const Delete: React.FC<IDeleteProp> = ({ onClick }) => {
	return <div className={styles.delete} onClick={onClick}></div>;
};
