export const useRequestDeleteToDo = (refreshList, setRefreshList) => {
	const requestDeleteToDo = id => {
		const url = 'http://localhost:3004/todos/' + id;

		fetch(url, {
			method: 'DELETE',
		}).then(response => {
			console.log('requestDeleteToDo', response);
			setRefreshList(!refreshList);
		});
	};

	return { requestDeleteToDo };
};
