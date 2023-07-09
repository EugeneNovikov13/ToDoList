import { useNavigate } from 'react-router-dom';
import styles from './delete.module.css';

export const Delete = ({id, requestDeleteToDo}) => {

    const navigate = useNavigate();

    const onDeleteClick = () => {
        requestDeleteToDo(id);
        navigate('/');
    }

    return <div className={styles.delete} onClick={onDeleteClick}></div>
}