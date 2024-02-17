import { IToDo, IToDoList } from '../../types';

enum ToDoActionTypes {
	LOAD_DATABASE = 'LOAD_DATABASE',
	ADD_TODO = 'ADD_TODO',
	UPDATE_TODO = 'UPDATE_TODO',
	REMOVE_TODO = 'REMOVE_TODO',
	SEARCH_BY_TODOLIST = 'SEARCH_BY_TODOLIST',
}

interface ILoadDatabase {
	type: ToDoActionTypes.LOAD_DATABASE;
	payload: IToDoList;
}

interface IAddToDo {
	type: ToDoActionTypes.ADD_TODO;
	payload: { [id: string]: IToDo };
}

interface IUpdateToDo {
	type: ToDoActionTypes.UPDATE_TODO;
	payload: { id: string; item: IToDo };
}

interface IRemoveToDo {
	type: ToDoActionTypes.REMOVE_TODO;
	payload: string;
}

interface ISearchById {
	type: ToDoActionTypes.SEARCH_BY_TODOLIST;
	payload: IToDoList;
}

type ToDoAction = ILoadDatabase | IAddToDo | IUpdateToDo | IRemoveToDo | ISearchById;

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
		//TODO какой-то косяк с типом
		case ToDoActionTypes.SEARCH_BY_TODOLIST:
			return {
				...payload,
			};
		default:
			return state;
	}
};
