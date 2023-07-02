import {ref, push} from 'firebase/database';
import {db} from '../../firebase';

export const useRequestAddToDo = () => {
	const requestAddToDo = val => {

		const toDoDbRef = ref(db, 'todos');

		push(toDoDbRef, {
				text: val,
				completed: false,
			})
			.then(() => console.log('Запись добавлена'))
	};

	return { requestAddToDo };
};
