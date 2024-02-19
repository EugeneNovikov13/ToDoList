import { IToDo, IToDoList, IToDoOptional } from './to-do-list-interface';

export enum ToDoActionTypes {
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
	payload: { id: string; item: IToDoOptional };
}

interface IRemoveToDo {
	type: ToDoActionTypes.REMOVE_TODO;
	payload: string;
}

interface ISearchById {
	type: ToDoActionTypes.SEARCH_BY_TODOLIST;
	payload: IToDoList;
}

export type ToDoAction =
	| ILoadDatabase
	| IAddToDo
	| IUpdateToDo
	| IRemoveToDo
	| ISearchById;
