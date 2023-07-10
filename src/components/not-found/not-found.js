import styles from './not-found.module.css';

export const NotFound = () => {
	return (
		<div className={styles.notFoundWrapper}>
			<div className={styles.icon}></div>
			<div>Страница не найдена</div>
		</div>
	);
};
