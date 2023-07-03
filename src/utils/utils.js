import { ref, get } from 'firebase/database';
import { db } from '../firebase';

export const debounce = (func, delay) => {
	let timeoutId;

	return function (...args) {
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

export const sortObjectByValue = obj => {
	return Object.values(obj).sort(function (a, b) {
		if (a.text.toLowerCase() > b.text.toLowerCase()) {
			return 1;
		}
		if (a.text.toLowerCase() < b.text.toLowerCase()) {
			return -1;
		}
		return 0;
	});
};
