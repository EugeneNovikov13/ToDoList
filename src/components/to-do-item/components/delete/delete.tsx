import styles from './delete.module.css';

export const Delete: React.FC = ({ onClick }: { onClick: void }) => {
	return <div className={styles.delete} onClick={onClick}></div>;
};
