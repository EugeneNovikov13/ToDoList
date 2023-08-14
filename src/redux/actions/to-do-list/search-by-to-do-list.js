import { get, ref } from 'firebase/database';
import { db } from '../../../firebase';

export const searchByToDoList = val => dispatch => {
	const toDoDbRef = ref(db, 'todos');

	get(toDoDbRef).then(data => {
		const filteredResult = Object.values(data.val()).filter(obj =>
			obj.text.toLowerCase().includes(val),
		);
		dispatch({
			type: 'SEARCH_BY_TODOLIST',
			payload: filteredResult,
		});
	});
};
