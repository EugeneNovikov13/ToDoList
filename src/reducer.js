export const initialState = {
	sorted: false, //App
	toDoList: {}, //App
	activeAddInput: true, //Header
};

export const reducer = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		//case
		default:
			return state;
	}
};
