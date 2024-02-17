import { get, ref } from 'firebase/database';
import { db } from '../../../firebase';
import { IToDoList } from '../../../types';

export const searchByToDoList = (searchedVal: string) => dispatch => {
	const toDoDbRef = ref(db, 'todos');

	get(toDoDbRef).then(data => {
		const loadedToDos: IToDoList = data.val() || {};
		const filteredToDoList: IToDoList | {} = Object.entries(loadedToDos).reduce(
			(acc, [id, todo]) => {
				if (todo.text.includes(searchedVal)) {
					acc[id] = todo;
				}
				return acc;
			},
			{},
		);
		dispatch({
			type: 'SEARCH_BY_TODOLIST',
			payload: filteredToDoList,
		});
	});
};
