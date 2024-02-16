export interface IToDo {
	completed: boolean;
	orderIndex: number;
	text: string;
}

export interface IToDoList {
	[id: string]: IToDo;
}
