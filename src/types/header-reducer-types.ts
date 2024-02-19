import { Action } from 'redux';

export interface IHeaderState {
	sorted: boolean;
	activeAddInput: boolean;
}

export enum HeaderActionTypes {
	SET_ACTIVE_ADD_INPUT = 'SET_ACTIVE_ADD_INPUT',
	SET_SORTED = 'SET_SORTED',
}

interface ISetActiveAddInput extends Action {
	type: HeaderActionTypes.SET_ACTIVE_ADD_INPUT;
	payload: boolean;
}

interface ISetSorted extends Action {
	type: HeaderActionTypes.SET_SORTED;
	payload: boolean;
}

export type HeaderAction = ISetActiveAddInput | ISetSorted;
