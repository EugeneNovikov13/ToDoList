export const useRequestUpdateToDo = (refreshList, setRefreshList) => {
	const requestUpdateToDo = (id, obj) => {
		const url = 'http://localhost:3004/todos/' + id;

		fetch(url, {
			method: 'PATCH',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify(obj),
		})
			.then(rawResponse => rawResponse.json())
			.then(response => {
				console.log('requestUpdateToDo', response);
				setRefreshList(!refreshList);
			});
	};

	return { requestUpdateToDo };
};
