import { useState } from 'react';

export const useRequestDeleteToDo = (refreshList, setRefreshList) => {
	const [isDeleting, setIsDeleting] = useState(false);

	const requestDeleteToDo = () => {
		setIsDeleting(true);

		fetch('http://localhost:3004/todos/003', {
			method: 'DELETE',
		})
			.then(rawResponse => rawResponse.json())
			.then(response => {
				console.log('Дело удалено, ответ сервера:', response);
				setRefreshList(!refreshList);
			})
			.finally(() => setIsDeleting(false));
	};

	return { requestDeleteToDo, isDeleting };
};
