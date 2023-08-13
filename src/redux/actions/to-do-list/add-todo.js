import { push, ref } from 'firebase/database';
import { db } from '../../../firebase';

export const addTodo = (val, orderIndex) => dispatch => {
	const upperCaseVal = val[0].toUpperCase() + val.slice(1);

	const data = {
		orderIndex: `${orderIndex}`,
		text: `${upperCaseVal}`,
		completed: false,
	};
	const toDoDbRef = ref(db, 'todos');

	const newPostKey = push(toDoDbRef).key;

	push(toDoDbRef, data)
		.then(() => {
			console.log('Запись добавлена');
			dispatch({
				type: 'ADD_TODO',
				payload: { [newPostKey]: data },
			});
		});
};