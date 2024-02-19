export interface IToDo {
	completed: boolean;
	orderIndex: number;
	text: string;
}

export interface IToDoOptional {
	completed?: boolean;
	orderIndex?: number;
	text?: string;
}

export interface IToDoWithId extends IToDo {
	id: string;
}

export interface IToDoList {
	[id: string]: IToDo;
}
