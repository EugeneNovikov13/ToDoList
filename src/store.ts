import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { headerReducer, toDoReducer } from './redux/reducers';

const reducer = combineReducers({
	toDoListState: toDoReducer,
	headerState: headerReducer,
});

export type RootState = ReturnType<typeof reducer>;

const composeEnhancers =
	(window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose) || compose;

export const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
