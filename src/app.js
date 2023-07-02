import {useState} from 'react';
import {
    useRequestGetToDos,
    useRequestAddToDo,
    useRequestUpdateTextToDo,
    useRequestUpdateCheckedToDo,
    useRequestDeleteToDo,
} from './hooks';
import {ToDoItem, AddingInput, Search, SortButton} from './components';
import styles from './app.module.css';

export const App = () => {
    const [refreshList, setRefreshList] = useState(false);
    const [activeAddInput, setActiveAddInput] = useState(true);
    const [sorted, setSorted] = useState(false);

    const {toDoList, setToDoList, requestGetToDos} = useRequestGetToDos(refreshList);

    const {requestAddToDo} = useRequestAddToDo(refreshList, setRefreshList);

    const {requestUpdateTextToDo} = useRequestUpdateTextToDo(refreshList, setRefreshList);

    const {requestUpdateCheckedToDo} = useRequestUpdateCheckedToDo(refreshList, setRefreshList);

    const {requestDeleteToDo} = useRequestDeleteToDo(refreshList, setRefreshList);

    return (
        <div className={styles.todoList}>
            <div className={styles.buttonWrapper}>
                <AddingInput
                    activeAddInput={activeAddInput}
                    setActiveAddInput={setActiveAddInput}
                    requestAddToDo={requestAddToDo}
                />

                <Search
                    setToDoList={setToDoList}
                    activeAddInput={activeAddInput}
                    setActiveAddInput={setActiveAddInput}
                />
                <SortButton
                    requestGetToDos={requestGetToDos}
                    sorted={sorted}
                    setSorted={setSorted}
                />
            </div>

            {toDoList.map(({id, text, completed}) => (
                <ToDoItem
                    key={id}
                    id={id}
                    completed={completed}
                    text={text}
                    requestDeleteToDo={requestDeleteToDo}
                    requestUpdateTextToDo={requestUpdateTextToDo}
                    requestUpdateCheckedToDo={requestUpdateCheckedToDo}
                />
            ))}
        </div>
    );
};
