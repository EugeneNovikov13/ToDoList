import { Dispatch } from 'redux';
import { ref, remove } from 'firebase/database';
import { db } from '../../../firebase';
import { ToDoAction, ToDoActionTypes } from '../../../types';

export const deleteTodo = (id: string) => (dispatch: Dispatch<ToDoAction>) => {
	const path = 'todos/' + id;

	const toDoItemRef = ref(db, path);

	remove(toDoItemRef).then(() => {
		console.log('Запись удалена');
		dispatch({
			type: ToDoActionTypes.REMOVE_TODO,
			payload: id,
		});
	});
};
