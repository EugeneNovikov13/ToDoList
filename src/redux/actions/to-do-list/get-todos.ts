import { get, ref } from 'firebase/database';
import { db } from '../../../firebase';
import { Dispatch } from 'redux';
import { IToDoList, ToDoAction, ToDoActionTypes } from '../../../types';

export const loadDatabaseAsync = () => (dispatch: Dispatch<ToDoAction>) => {
	const toDoDbRef = ref(db, 'todos');
	try {
		get(toDoDbRef).then(snapshot => {
			const loadedToDos: IToDoList = snapshot.val() || {};
			dispatch({
				type: ToDoActionTypes.LOAD_DATABASE,
				payload: loadedToDos,
			});
		});
	} catch (e) {
		console.log(e);
	}
};
