export const useRequestUpdateTextToDo = (refreshList, setRefreshList) => {

	const requestUpdateTextToDo = (id, val) => {

		const url = 'http://localhost:3004/todos/' + id;

		fetch(url, {
			method: 'PATCH',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
				text: val,
			}),
		})
			.then(rawResponse => rawResponse.json())
			.then(response => {
				setRefreshList(!refreshList);
			})
	};

	return { requestUpdateTextToDo };
};
