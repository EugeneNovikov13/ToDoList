import { ref, remove } from 'firebase/database';
import { db } from '../../firebase';

export const useRequestDeleteToDo = () => {
	const requestDeleteToDo = id => {
		const path = 'todos/' + id;

		const toDoItemRef = ref(db, path);

        remove(toDoItemRef)
            .then(() => console.log('Запись удалена'), () => console.log('Не удалось удалить'))
    };

	return { requestDeleteToDo };
};
