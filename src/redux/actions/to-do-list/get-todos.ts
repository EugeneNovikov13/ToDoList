import { get, ref } from 'firebase/database';
import { db } from '../../../firebase';
import { IToDoList } from '../../../types';

export const loadDatabaseAsync = dispatch => {
	const toDoDbRef = ref(db, 'todos');
	try {
		get(toDoDbRef).then(snapshot => {
			const loadedToDos: IToDoList = snapshot.val() || {};
			console.log('requestGetToDos', loadedToDos);
			dispatch({
				type: 'LOAD_DATABASE',
				payload: loadedToDos,
			});
		});
	} catch (e) {
		console.log(e);
	}
};
