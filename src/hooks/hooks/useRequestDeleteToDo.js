import { useState } from 'react';

export const useRequestDeleteToDo = (refreshList, setRefreshList) => {

	const requestDeleteToDo = (id) => {

		const url = 'http://localhost:3004/todos/' + id;

		fetch(url, {
			method: 'DELETE',
		})
			.then(() => setRefreshList(!refreshList))
	};

	return { requestDeleteToDo };
};
