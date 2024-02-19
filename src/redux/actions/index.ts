import * as ToDoActionCreator from './to-do-list';
import * as HeaderActionCreator from './header';

export const ActionCreators = {
	...ToDoActionCreator,
	...HeaderActionCreator,
};
