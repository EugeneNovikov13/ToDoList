export const toDoListInitialState = {
	toDoList: {}, //App
};

export const toDoReducer = (state = toDoListInitialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'LOAD_DATABASE':
			return {
				...state,
				toDoList: payload,
			};
		case 'ADD_TODO':
			return {
				...state,
				toDoList: {
					...state.toDoList,
					...payload,
				},
			};
		case 'REMOVE_TODO':
			return {
				...state,
				toDoList: {
					payload,
					...state.toDoList,
				}
			}
		default:
			return state;
	}
};
