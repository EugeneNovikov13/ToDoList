import {useState} from 'react';
import styles from './toDoItem.module.css';

export const ToDoItem = props => {
    const {id, text, completed, requestDeleteToDo, requestUpdateToDo} = props;

    const [isEdited, setIsEdited] = useState(false);
    const [value, setValue] = useState(text);
    const [checkedState, setCheckedState] = useState(completed);

    const onCheckboxClick = () => {
        setCheckedState(!checkedState);
        requestUpdateToDo(id, value, !checkedState);
    }

    const onDeleteClick = () => {
        requestDeleteToDo(id);
    }

    const onTodoTextDoubleClick = () => {
        setIsEdited(true);
    }

    const onEditedItemChange = ({target}) => {
        setValue(target.value);
    };

    const onEditedItemBlur = () => {
        requestUpdateToDo(id, value, checkedState);
        if (value.length > 0) setIsEdited(false)
        else requestDeleteToDo(id);
    }

    return (
        <div className={styles.todoItem}>
            <div
                className={completed ? `${styles.checkboxChecked}` : `${styles.checkbox}`}
                onClick={onCheckboxClick}
            ></div>
            {isEdited ? <input className={styles.editedItem} type="text" value={value} autoFocus={true}
                               onChange={onEditedItemChange} onBlur={onEditedItemBlur}></input> :
                <div className={styles.todoText} onDoubleClick={onTodoTextDoubleClick}>{text}</div>}
            <div className={styles.delete} onClick={onDeleteClick}></div>
        </div>
    );
};
