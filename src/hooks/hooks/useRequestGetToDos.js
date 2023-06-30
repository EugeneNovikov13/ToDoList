import { useState, useEffect } from 'react';

export const useRequestGetToDos = refreshList => {
	const [toDoList, setToDoList] = useState([]);

	useEffect(() => {
		fetch('http://localhost:3004/todos')
			.then(loadedData => loadedData.json())
			.then(loadedToDos => {
				setToDoList(loadedToDos);
			});
		// .finally(() => setIsLoading(false));
	}, [refreshList]);

	return { toDoList };
};
