import { useParams } from 'react-router-dom';
import styles from './to-do-page.module.css';
import { ToDoEdit, BackArrow } from '../../components';

export const ToDoPage = ({
	toDoList,
	requestUpdateTextToDo,
	requestUpdateCheckedToDo,
	requestDeleteToDo,
}) => {
	const params = useParams();

	if (toDoList.length > 0) {
		const getToDo = id => toDoList.find(el => el.id === id);

		const { id, text, completed, changedTimeStamp } = getToDo(params.id);

		return (
			<div className={styles.todoWrapper}>
				<BackArrow />
				<ToDoEdit
					id={id}
					completed={completed}
					text={text}
					requestUpdateTextToDo={requestUpdateTextToDo}
					requestUpdateCheckedToDo={requestUpdateCheckedToDo}
					requestDeleteToDo={requestDeleteToDo}
				/>
				<div className={styles.lastEdited}>
					Последнее изменение: {changedTimeStamp}
				</div>
			</div>
		);
	}
};
