import { v1 as uuidv1 } from 'uuid';

export const useRequestAddToDo = (refreshList, setRefreshList) => {
	const requestAddToDo = val => {
		const id = uuidv1();

		fetch('http://localhost:3004/todos', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
				id: id,
				text: val,
				completed: false,
			}),
		})
			.then(rawResponse => rawResponse.json())
			.then(response => {
				setRefreshList(!refreshList);
			});
	};

	return { requestAddToDo };
};
