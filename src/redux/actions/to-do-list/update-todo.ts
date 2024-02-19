import { ref, update } from 'firebase/database';
import { db } from '../../../firebase';
import { Dispatch } from 'redux';
import { IToDoOptional, ToDoAction, ToDoActionTypes } from '../../../types';

export const updateTodo =
	(id: string, obj: IToDoOptional) => (dispatch: Dispatch<ToDoAction>) => {
		const path = 'todos/' + id;

		const toDoItemRef = ref(db, path);

		update(toDoItemRef, obj).then(() => {
			console.log('Обновлена запись');
			dispatch({
				type: ToDoActionTypes.UPDATE_TODO,
				payload: { id: id, item: obj },
			});
		});
	};
