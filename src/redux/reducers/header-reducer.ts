import { HeaderAction, HeaderActionTypes, IHeaderState } from '../../types';

export const headerInitialState: IHeaderState = {
	sorted: false,
	activeAddInput: true,
};

export const headerReducer = (
	state = headerInitialState,
	action: HeaderAction,
): IHeaderState => {
	const { type, payload } = action;

	switch (type) {
		case HeaderActionTypes.SET_ACTIVE_ADD_INPUT:
			return {
				...state,
				activeAddInput: payload,
			};
		case HeaderActionTypes.SET_SORTED:
			return {
				...state,
				sorted: payload,
			};
		default:
			return state;
	}
};
