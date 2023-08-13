import { get, ref } from 'firebase/database';
import { db } from '../../../firebase';

export const loadDatabaseAsync = dispatch => {
	const toDoDbRef = ref(db, 'todos');
	get(toDoDbRef)
		.then((snapshot) => {
			const loadedToDos = snapshot.val() || {};
			console.log('requestGetToDos', loadedToDos);
			dispatch({
				type: 'LOAD_DATABASE',
				payload: loadedToDos,
			});
		});
};