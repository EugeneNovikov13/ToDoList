import { v1 as uuidv1 } from 'uuid';
import { ref, set } from 'firebase/database';
import { db } from '../../../firebase';

export const addTodo = (val, orderIndex) => dispatch => {
	const id = uuidv1();

	const upperCaseVal = val[0].toUpperCase() + val.slice(1);

	const data = {
		orderIndex: `${orderIndex}`,
		text: `${upperCaseVal}`,
		completed: false,
	};
	const toDoDbRef = ref(db, 'todos/' + id);

	set(toDoDbRef, data).then(() => {
		console.log('Запись добавлена');
		dispatch({
			type: 'ADD_TODO',
			payload: { [id]: data },
		});
	});
};
