import styles from './edited-to-do-text.module.css';

export const EditedToDoText = ({ text, setIsEdited }) => {
	return (
		<div
			className={styles.editedToDoText}
			onClick={() => setIsEdited(true)}
		>{text}</div>
	);
};