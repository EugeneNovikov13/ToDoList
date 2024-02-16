export const headerInitialState = {
	sorted: false,
	activeAddInput: true,
};

export const headerReducer = (state = headerInitialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'SET_ACTIVE_ADD_INPUT':
			return {
				...state,
				activeAddInput: payload,
			};
		case 'SET_SORTED':
			return {
				...state,
				sorted: payload,
			};
		default:
			return state;
	}
};
