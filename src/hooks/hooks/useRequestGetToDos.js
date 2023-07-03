import { useState, useEffect } from 'react';
import { ref, onValue } from 'firebase/database';
import { db } from '../../firebase';
import { sortObjectByValue } from '../../utils/utils';

export const useRequestGetToDos = sorted => {
	const [toDoList, setToDoList] = useState({});

	const requestGetToDos = () => {
		const toDoDbRef = ref(db, 'todos');

		return onValue(toDoDbRef, snapshot => {
			let loadedToDos = snapshot.val() || {};
			if (sorted) loadedToDos = sortObjectByValue(loadedToDos);

			setToDoList(loadedToDos);
		});
	};

	useEffect(requestGetToDos, [sorted]);

	return { toDoList, setToDoList, requestGetToDos };
};
