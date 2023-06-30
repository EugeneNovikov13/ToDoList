import { useState } from 'react';
import { v1 as uuidv1 } from 'uuid';

export const useRequestAddToDo = (refreshList, setRefreshList) => {
	const requestAddToDo = val => {
		// setIsCreating(true);
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
				console.log('Дело добавлено. Ответ сервера: ', response);
				setRefreshList(!refreshList);
			});
		// .finally(() => setIsCreating(false));
	};

	// return { requestAddToDo, isCreating };
	return { requestAddToDo };
};
