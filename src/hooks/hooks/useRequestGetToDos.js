import { useState, useEffect } from 'react';

export const useRequestGetToDos = refreshList => {
	const [toDoList, setToDoList] = useState([]);
	const requestGetToDos = (url = 'http://localhost:3004/todos') => {
		fetch(url)
			.then(loadedData => loadedData.json())
			.then(loadedToDos => {
				setToDoList(loadedToDos);
			});
	};

	useEffect(requestGetToDos, [refreshList]);

	return { toDoList, setToDoList, requestGetToDos };
};
