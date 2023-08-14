export const sortToDosByOrderIndex = (param, a, b) => {
	const value1 = !isNaN(a[1][param]) ? Number(a[1][param]) : a[1][param];
	const value2 = !isNaN(b[1][param]) ? Number(b[1][param]) : b[1][param];
	if (value1 > value2) {
		return 1;
	}
	if (value1 < value2) {
		return -1;
	}
};

export const maxOrderIndex = list => {
	return Object.values(list).length > 0
		? Math.max(...Object.values(list).map(todo => todo.orderIndex)) + 1
		: 0;
};
