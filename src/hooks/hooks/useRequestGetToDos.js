// import { useEffect, useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { ref, onValue, get, child } from 'firebase/database';
// import { db } from '../../firebase';
// import { loadDatabase } from '../../redux/actions';
//
// export const useRequestGetToDos = () => {
// 	const dispatch = useDispatch();
// 	const requestGetToDos = () => {
//
// 		const toDoDbRef = ref(db, 'todos');
//
// 		// обработчик события изменения базы данных. ему передаётся ссылка на БД и коллбек, который нужно выполнить, когда произойдут изменения
// 		// snapshot это "снимок" БД на момент выполнения коллбека. вызывая метод val(), мы получаем объект данных
// 		// возвращая onValue, мы отписываемся от подписчика, когда компонент будет удалён
// 		// return onValue(toDoDbRef, (snapshot) => {
// 		// 	const loadedToDos = snapshot.val() || {};
// 		// 	console.log('requestGetToDos', loadedToDos);
// 		// 	dispatch(loadDatabase(loadedToDos));
// 		// });
// 		get(toDoDbRef).then((snapshot) => {
// 			const loadedToDos = snapshot.val() || {};
// 			console.log('requestGetToDos', loadedToDos);
// 			dispatch(loadDatabase(loadedToDos));
// 		});
// 	};
//
// 	useEffect(requestGetToDos, []);
//
// 	return { requestGetToDos };
// };
//
// // get(child(dbRef, `users/${userId}`)).then((snapshot) => {  if (snapshot.exists()) {    console.log(snapshot.val());