import {useState} from 'react';
import styles from './checkbox.module.css';

export const Checkbox = ({id, completed, requestUpdateCheckedToDo}) => {

    const [checkedState, setCheckedState] = useState(completed);

    const onCheckboxClick = () => {
        setCheckedState(!checkedState);
        requestUpdateCheckedToDo(id, !checkedState);
    }

    return (
        <div
            className={completed ? `${styles.checkboxChecked}` : `${styles.checkbox}`}
            onClick={onCheckboxClick}
        ></div>
    )
}