import {Checkbox, EditedItem, ToDoText, Delete} from "../index";
import {useState} from 'react';
import styles from './to-do-item.module.css';

export const ToDoItem = props => {
    const {id, text, completed, requestDeleteToDo, requestUpdateTextToDo, requestUpdateCheckedToDo} = props;

    const [isEdited, setIsEdited] = useState(false);

    return (
        <div className={styles.todoItem}>
            <Checkbox
                id={id}
                completed={completed}
                requestUpdateCheckedToDo={requestUpdateCheckedToDo}
            />
            {isEdited ?
                <EditedItem
                    id={id}
                    text={text}
                    setIsEdited={setIsEdited}
                    requestUpdateTextToDo={requestUpdateTextToDo}
                    requestDeleteToDo={requestDeleteToDo}
                /> :
                <ToDoText
                    text={text}
                    setIsEdited={setIsEdited}
                />}
            <Delete
                id={id}
                requestDeleteToDo={requestDeleteToDo}
            />
        </div>
    );
};
