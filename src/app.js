import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import {
	useRequestGetToDos,
	useRequestAddToDo,
	useRequestUpdateTextToDo,
	useRequestUpdateCheckedToDo,
	useRequestDeleteToDo,
} from './hooks';
import { ToDoList, ToDoPage } from './components';

export const App = () => {
	const [refreshList, setRefreshList] = useState(false);
	const [activeAddInput, setActiveAddInput] = useState(true);
	const [sorted, setSorted] = useState(false);

	const { toDoList, setToDoList, requestGetToDos } = useRequestGetToDos(refreshList);

	const { requestAddToDo } = useRequestAddToDo(refreshList, setRefreshList);

	const { requestUpdateTextToDo } = useRequestUpdateTextToDo(refreshList, setRefreshList);

	const { requestUpdateCheckedToDo } = useRequestUpdateCheckedToDo(refreshList, setRefreshList);

	const { requestDeleteToDo } = useRequestDeleteToDo(refreshList, setRefreshList);

	return (
		<div>
			<Routes>
				<Route path='/' element={
					<ToDoList
						toDoList={toDoList}
						setToDoList={setToDoList}
						activeAddInput={activeAddInput}
						setActiveAddInput={setActiveAddInput}
						sorted={sorted}
						setSorted={setSorted}
						requestGetToDos={requestGetToDos}
						requestAddToDo={requestAddToDo}
					/>
				} />
				<Route path='todos/:id' element={
					<ToDoPage
						toDoList={toDoList}
						setToDoList={setToDoList}
						requestUpdateTextToDo={requestUpdateTextToDo}
						requestUpdateCheckedToDo={requestUpdateCheckedToDo}
						requestDeleteToDo={requestDeleteToDo}
					/>} />
			</Routes>
		</div>
	)
		;
};
