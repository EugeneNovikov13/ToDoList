import { useState } from 'react';
import {
	useRequestGetToDos,
	useRequestAddToDo,
	useRequestUpdateTextToDo,
	useRequestUpdateCheckedToDo,
	useRequestDeleteToDo,
} from './hooks';
import { ToDoItem, AddingInput, Search, SortButton } from './components';
import styles from './app.module.css';

export const App = () => {
	const [activeAddInput, setActiveAddInput] = useState(true);
	const [sorted, setSorted] = useState(false);

	const { toDoList, setToDoList } = useRequestGetToDos(sorted);

	const { requestAddToDo } = useRequestAddToDo();

	const { requestUpdateTextToDo } = useRequestUpdateTextToDo();

	const { requestUpdateCheckedToDo } = useRequestUpdateCheckedToDo();

	const { requestDeleteToDo } = useRequestDeleteToDo();

	return (
		<div className={styles.todoList}>
			<div className={styles.buttonWrapper}>
				<AddingInput
					activeAddInput={activeAddInput}
					setActiveAddInput={setActiveAddInput}
					requestAddToDo={requestAddToDo}
				/>

				<Search
					setToDoList={setToDoList}
					activeAddInput={activeAddInput}
					setActiveAddInput={setActiveAddInput}
				/>
				<SortButton sorted={sorted} setSorted={setSorted} />
			</div>

			{Object.entries(toDoList).map(([id, { text, completed }]) => (
				<ToDoItem
					key={id}
					id={id}
					completed={completed}
					text={text}
					requestDeleteToDo={requestDeleteToDo}
					requestUpdateTextToDo={requestUpdateTextToDo}
					requestUpdateCheckedToDo={requestUpdateCheckedToDo}
				/>
			))}
		</div>
	);
};
