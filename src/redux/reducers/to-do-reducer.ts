import { IToDoList, ToDoAction, ToDoActionTypes } from '../../types';

export const toDoListInitialState: IToDoList = {};

export const toDoReducer = (
	state = toDoListInitialState,
	action: ToDoAction,
): IToDoList => {
	const { type, payload } = action;

	switch (type) {
		case ToDoActionTypes.LOAD_DATABASE:
			return {
				...payload,
			};
		case ToDoActionTypes.ADD_TODO:
			return {
				...state,
				...payload,
			};
		case ToDoActionTypes.UPDATE_TODO:
			return {
				...state,
				[payload.id]: {
					...state[payload.id],
					...payload.item,
				},
			};
		case ToDoActionTypes.REMOVE_TODO:
			const newToDoList = Object.keys(state).reduce((result, key) => {
				if (key !== payload) {
					result[key] = state[key];
				}
				return result;
			}, {});
			return {
				...newToDoList,
			};
		case ToDoActionTypes.SEARCH_BY_TODOLIST:
			return {
				...payload,
			};
		default:
			return state;
	}
};
