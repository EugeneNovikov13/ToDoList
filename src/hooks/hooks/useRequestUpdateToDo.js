import { useState } from 'react';

export const useRequestUpdateToDo = (refreshList, setRefreshList) => {
	const [isUpdating, setIsUpdating] = useState(false);

	const requestUpdateToDo = () => {
		setIsUpdating(true);

		fetch('http://localhost:3004/todos/002', {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
				name: 'Смартфон',
				price: 17900,
			}),
		})
			.then(rawResponse => rawResponse.json())
			.then(response => {
				console.log('Список обновлён, ответ сервера:', response);
				setRefreshList(!refreshList);
			})
			.finally(() => setIsUpdating(false));
	};

	return { requestUpdateToDo, isUpdating };
};
