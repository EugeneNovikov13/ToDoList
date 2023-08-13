import { ref, remove } from 'firebase/database';
import { db } from '../../../firebase';

export const deleteTodo = (id) => dispatch => {
	const path = 'todos/' + id;

	const toDoItemRef = ref(db, path);

	remove(toDoItemRef)
		.then(() => {
			console.log('Запись удалена');
			dispatch({
				type: 'REMOVE_TODO',
				payload: id,
			});
		});
};
