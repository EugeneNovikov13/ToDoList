import {ref, update} from 'firebase/database';
import {db} from '../../firebase';

export const useRequestUpdateTextToDo = () => {

	const requestUpdateTextToDo = (id, val) => {

		const path = 'todos/' + id;

		const toDoTextRef = ref(db, path);

		update(toDoTextRef, {
				text: val,
			})
			.then(response => {
				console.log('Обновлена запись');
			})
	};

	return { requestUpdateTextToDo };
};
