import { ref, update } from 'firebase/database';
import { db } from '../../../firebase';

export const updateTodo = (id, obj) => dispatch => {
	const path = 'todos/' + id;

	const toDoItemRef = ref(db, path);

	update(toDoItemRef, obj).then(() => {
		console.log('Обновлена запись');
		dispatch({
			type: 'UPDATE_TODO',
			payload: { id: id, item: obj },
		});
	});
};
