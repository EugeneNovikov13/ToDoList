import { useState, useEffect } from 'react';
import {ref, onValue} from 'firebase/database';
import {db} from '../../firebase';

export const useRequestGetToDos = () => {

	const [toDoList, setToDoList] = useState({});

	const requestGetToDos = () => {
		const toDoDbRef = ref(db, 'todos');

		return onValue(toDoDbRef, (snapshot) => {
			const loadedToDos = snapshot.val() || {};

			setToDoList(loadedToDos);
		});
	}

	useEffect(requestGetToDos, []);

	return { toDoList, setToDoList, requestGetToDos };
};
