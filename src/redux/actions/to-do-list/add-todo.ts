import { v1 as uuidv1 } from 'uuid';
import { ref, set } from 'firebase/database';
import { db } from '../../../firebase';
import { maxOrderIndex } from '../../../utils/utils';
import { ToDoAction, ToDoActionTypes } from '../../../types';
import { Dispatch } from 'redux';
import { RootState } from '../../../store';

export const addTodo =
	(val: string) => (dispatch: Dispatch<ToDoAction>, getState: () => RootState) => {
		const id = uuidv1();

		const upperCaseVal = val[0].toUpperCase() + val.slice(1);

		const list = getState().toDoListState;
		const orderIndex = maxOrderIndex(list);

		const data = {
			orderIndex: orderIndex,
			text: upperCaseVal,
			completed: false,
		};

		const toDoDbRef = ref(db, 'todos/' + id);

		set(toDoDbRef, data).then(() => {
			console.log('Запись добавлена');
			dispatch({
				type: ToDoActionTypes.ADD_TODO,
				payload: { [id]: data },
			});
		});
	};
