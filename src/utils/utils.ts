import { IToDo, IToDoList } from '../types';

export const sortToDosByOrderIndex = (param: string, a: IToDo, b: IToDo): number => {
	const value1 = !isNaN(a[param]) ? Number(a[param]) : a[param];
	const value2 = !isNaN(b[param]) ? Number(b[param]) : b[param];
	if (value1 > value2) {
		return 1;
	}
	if (value1 < value2) {
		return -1;
	}
};

export const maxOrderIndex = (list: IToDoList) => {
	return Object.values(list).length > 0
		? Math.max(...Object.values(list).map(todo => todo.orderIndex)) + 1
		: 0;
};
