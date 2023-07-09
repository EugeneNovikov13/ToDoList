import styles from './to-do-list.module.css';
import { AddingInput } from '../addingInput/adding-input';
import { Search } from '../search/search';
import { SortButton } from '../sort-button/sort-button';
import { ToDoItem } from '../to-do-item/to-do-item';

export const ToDoList = ({
							 toDoList,
							 setToDoList,
							 activeAddInput,
							 setActiveAddInput,
							 sorted,
							 setSorted,
							 requestAddToDo,
							 requestGetToDos,
						 }) => {
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
				<SortButton
					requestGetToDos={requestGetToDos}
					sorted={sorted}
					setSorted={setSorted}
				/>
			</div>

			{toDoList.map(({ id, text, completed }) => (
				<ToDoItem
					key={id}
					id={id}
					completed={completed}
					text={text}
				/>
			))}
		</div>
	);
};