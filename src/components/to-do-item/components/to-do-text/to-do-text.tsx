import styles from './to-do-text.module.css';

export const ToDoText = ({ children, ...rest }) => {
	return (
		<div className={styles.todoText} {...rest}>
			{children}
		</div>
	);
};
