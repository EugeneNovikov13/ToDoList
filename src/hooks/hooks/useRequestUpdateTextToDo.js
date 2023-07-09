import { getTimeStamp } from '../../utils/utils';

export const useRequestUpdateTextToDo = (refreshList, setRefreshList) => {

	const requestUpdateTextToDo = (id, val) => {

		const url = 'http://localhost:3004/todos/' + id;
		const timeStamp = getTimeStamp();

		fetch(url, {
			method: 'PATCH',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
				text: val,
				changedTimeStamp: timeStamp,
			}),
		})
			.then(rawResponse => rawResponse.json())
			.then(response => {
				setRefreshList(!refreshList);
			})
	};

	return { requestUpdateTextToDo };
};
