import styles from './delete.module.css';

export const Delete = ({ ...rest }) => {
	return <div className={styles.delete} {...rest}></div>;
};
