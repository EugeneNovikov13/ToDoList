import { v1 as uuidv1 } from 'uuid';
import { getTimeStamp } from '../../utils/utils';

export const useRequestAddToDo = (refreshList, setRefreshList) => {
	const requestAddToDo = val => {
		const id = uuidv1();
		const timeStamp = getTimeStamp();

		fetch('http://localhost:3004/todos', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
				id: id,
				text: val,
				completed: false,
				changedTimeStamp: timeStamp,
			}),
		})
			.then(rawResponse => rawResponse.json())
			.then(response => {
				setRefreshList(!refreshList);
			});
	};

	return { requestAddToDo };
};
