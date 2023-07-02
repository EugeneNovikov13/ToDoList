export const useRequestUpdateCheckedToDo = (refreshList, setRefreshList) => {

	const requestUpdateCheckedToDo = (id, checked) => {

		const url = 'http://localhost:3004/todos/' + id;

		fetch(url, {
			method: 'PATCH',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
				completed: checked,
			}),
		})
			.then(rawResponse => rawResponse.json())
			.then(response => {
				setRefreshList(!refreshList);
			})
	};

	return { requestUpdateCheckedToDo };
};
