import styles from './checkbox.module.css';

export const Checkbox = ({ completed, ...rest }) => {
	return (
		<div
			className={completed ? `${styles.checkboxChecked}` : `${styles.checkbox}`}
			{...rest}
		></div>
	);
};
