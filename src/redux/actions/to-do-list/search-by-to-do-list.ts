import { get, ref } from 'firebase/database';
import { db } from '../../../firebase';
import { Dispatch } from 'redux';
import { IToDoList, ToDoAction, ToDoActionTypes } from '../../../types';

export const searchByToDoList =
	(searchedVal: string) => (dispatch: Dispatch<ToDoAction>) => {
		const toDoDbRef = ref(db, 'todos');

		get(toDoDbRef).then(data => {
			const loadedToDos: IToDoList = data.val() || {};
			const filteredToDoList: IToDoList | {} = Object.entries(loadedToDos).reduce(
				(acc, [id, todo]) => {
					if (todo.text.toLowerCase().includes(searchedVal.toLowerCase())) {
						acc[id] = todo;
					}
					return acc;
				},
				{},
			);
			dispatch({
				type: ToDoActionTypes.SEARCH_BY_TODOLIST,
				payload: filteredToDoList,
			});
		});
	};
