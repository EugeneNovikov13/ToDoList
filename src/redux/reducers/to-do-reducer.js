export const toDoListInitialState = {};

export const toDoReducer = (state = toDoListInitialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'LOAD_DATABASE':
			return {
				...payload,
			};
		case 'ADD_TODO':
			return {
				...state,
				...payload,
			};
		case 'UPDATE_TODO':
			return {
				...state,
				[payload.id]: {
					...state[payload.id],
					...payload.item,
				},
			};
		case 'REMOVE_TODO':
			const newToDoList = Object.keys(state).reduce((result, key) => {
				if (key !== payload) {
					result[key] = state[key];
				}
				return result;
			}, {});
			return {
				...newToDoList,
			};
		case 'SEARCH_BY_TODOLIST':
			return {
				...payload,
			};
		default:
			return state;
	}
};
