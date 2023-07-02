import styles from './delete.module.css';

export const Delete = ({id, requestDeleteToDo}) => {

    const onDeleteClick = () => {
        requestDeleteToDo(id);
    }

    return <div className={styles.delete} onClick={onDeleteClick}></div>
}