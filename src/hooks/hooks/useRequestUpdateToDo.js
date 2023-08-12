import { ref, update } from 'firebase/database';
import { db } from '../../firebase';

export const useRequestUpdateToDo = () => {
	const requestUpdateToDo = (id, obj) => {
		const path = 'todos/' + id;

		const toDoTextRef = ref(db, path);

		update(toDoTextRef, obj)
			.then(() => console.log('Обновлена запись'), () => console.log('Запись не удалось обновить'));
	};

	return { requestUpdateToDo };
};
