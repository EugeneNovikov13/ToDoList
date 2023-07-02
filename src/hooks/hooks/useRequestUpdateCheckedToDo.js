import {ref, update} from 'firebase/database';
import {db} from '../../firebase';

export const useRequestUpdateCheckedToDo = () => {

	const requestUpdateCheckedToDo = (id, checked) => {

		const path = 'todos/' + id;

		const toDoCheckedRef = ref(db, path);

		update(toDoCheckedRef, {
				completed: checked,
			})
			.then(response => {
				console.log('Обновлена запись');
			})
	};

	return { requestUpdateCheckedToDo };
};
