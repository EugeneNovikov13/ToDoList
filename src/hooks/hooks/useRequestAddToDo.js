import { v1 as uuidv1 } from 'uuid';

export const useRequestAddToDo = (refreshList, setRefreshList) => {
	const requestAddToDo = (val, orderIndex) => {
		const id = uuidv1();
		const upperCaseVal = val[0].toUpperCase() + val.slice(1);
		const data = {
			[id]: {
				orderIndex: `${orderIndex}`,
				text: `${upperCaseVal}`,
				completed: false,
			},
		};

		fetch('http://localhost:3004/todos', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify(data),
		})
			.then(rawResponse => rawResponse.json())
			.then(response => {
				console.log('requestAddToDo', response);
				setRefreshList(!refreshList);
			});
	};

	return { requestAddToDo };
};
