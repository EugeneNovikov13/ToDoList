import { useState } from 'react';

export const useRequestUpdateToDo = (refreshList, setRefreshList) => {

	const requestUpdateToDo = (id, val, checked) => {

		const url = 'http://localhost:3004/todos/' + id;

		fetch(url, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
				text: val,
				completed: checked,
			}),
		})
			.then(rawResponse => rawResponse.json())
			.then(response => {
				setRefreshList(!refreshList);
			})
	};

	return { requestUpdateToDo };
};
