export const initialState = {
	refreshList: false, //App
	isDraggable: true, //App
	sorted: false, //App
	dragItem: null, //App
	toDoList: {}, //App
	requestAddToDo: null, //App
	requestUpdateToDo: null, //App
	requestDeleteToDo: null, //App
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
