import { useState, useEffect } from 'react';
import { ref, onValue } from 'firebase/database';
import { db } from '../../firebase';

export const useRequestGetToDos = () => {
	const [toDoList, setToDoList] = useState({});

	const requestGetToDos = () => {
		const toDoDbRef = ref(db, 'todos');

		// обработчик события изменения базы данных. ему передаётся ссылка на БД и коллбек, который нужно выполнить, когда произойдут изменения
		// snapshot это "снимок" БД на момент выполнения коллбека. вызывая метод val(), мы получаем объект данных
		// возвращая onValue, мы отписываемся от подписчика, когда компонент будет удалён
		return onValue(toDoDbRef, (snapshot) => {
			const loadedToDos = snapshot.val() || {};
			console.log('requestGetToDos', loadedToDos);
			setToDoList(loadedToDos);
		});
	}

	useEffect(requestGetToDos, []);

	return { toDoList, setToDoList };
};
