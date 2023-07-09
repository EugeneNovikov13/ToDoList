import style from './to-do-page.module.css';
import { useParams } from 'react-router-dom';
import styles from './to-do-page.module.css';
import { ToDoEdit } from '../to-do-edit/to-do-edit';

export const ToDoPage = ({
							 toDoList,
							 setToDoList,
							 requestUpdateTextToDo,
							 requestUpdateCheckedToDo,
							 requestDeleteToDo,
						 }) => {
	const getToDo = (id) => toDoList.find(el => el.id === id);

	const params = useParams();

	const { id, text, completed, changedTimeStamp } = getToDo(params.id);

	return (
		<div className={styles.todoWrapper}>
			{/*<BackArrow />*/}
			<ToDoEdit
					key={id}
					id={id}
					completed={completed}
					text={text}
					requestUpdateTextToDo={requestUpdateTextToDo}
					requestUpdateCheckedToDo={requestUpdateCheckedToDo}
					requestDeleteToDo={requestDeleteToDo}
				/>
			<div className={styles.lastEdited}>Последнее изменение: {changedTimeStamp}</div>
		</div>
	);
};