import { getTimeStamp } from '../../utils/utils';

export const useRequestUpdateCheckedToDo = (refreshList, setRefreshList) => {

	const requestUpdateCheckedToDo = (id, checked) => {

		const url = 'http://localhost:3004/todos/' + id;
		const timeStamp = getTimeStamp();

		fetch(url, {
			method: 'PATCH',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
				completed: checked,
				changedTimeStamp: timeStamp,
			}),
		})
			.then(rawResponse => rawResponse.json())
			.then(response => {
				setRefreshList(!refreshList);
			})
	};

	return { requestUpdateCheckedToDo };
};
