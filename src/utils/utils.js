import { ref, get } from 'firebase/database';
import { db } from '../firebase';

export const debounce = (func, delay) => {
	let timeoutId;

	return function(...args) {
		clearTimeout(timeoutId);
		timeoutId = setTimeout(() => func.apply(this, args), delay);
	};
};

export const search = (val, showSearchResult) => {
	const toDoDbRef = ref(db, 'todos');
	get(toDoDbRef).then(data => {
		const filteredResult = Object.values(data.val()).filter(obj =>
			obj.text.toLowerCase().includes(val),
		);
		showSearchResult(filteredResult);
	});
};

export const sortToDosByOrderIndex = (param, a, b) => {
	if (a[1][param] > b[1][param]) {
		return 1;
	}
	if (a[1][param] < b[1][param]) {
		return -1;
	}
};

export const maxOrderIndex = (list) => {
	return Object.values(list).length > 0 ? Math.max(...Object.values(list).map(todo => todo.orderIndex)) + 1 : 0;
}
