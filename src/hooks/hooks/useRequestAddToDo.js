import { ref, push } from 'firebase/database';
import { db } from '../../firebase';

export const useRequestAddToDo = () => {
	const requestAddToDo = (val, orderIndex) => {
		const upperCaseVal = val[0].toUpperCase() + val.slice(1);
		const data = {
			orderIndex: `${orderIndex}`,
			text: `${upperCaseVal}`,
			completed: false,
		};
		const toDoDbRef = ref(db, 'todos');

		push(toDoDbRef, data)
			.then(() => console.log('Запись добавлена'), () => console.log('Не удалось добавить запись'));
	};

	return { requestAddToDo };
};
