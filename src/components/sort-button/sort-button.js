import {ref, get} from 'firebase/database';
import {db} from '../../firebase';
import {sortObjectByValue} from '../../utils/utils';
import styles from './sort-button.module.css';

export const SortButton = ({sorted, setSorted, toDoList, setToDoList}) => {

    const onClick = () => {
        if (sorted) {
            const toDoDbRef = ref(db, 'todos');
            get(toDoDbRef)
                .then((data) => setToDoList(data.val()))
            setSorted(false);
        } else {
            setToDoList(sortObjectByValue(toDoList));
            setSorted(true);
        }
    }

    return (
        <button className={sorted ? `${styles.sortButtonSorted}` : `${styles.sortButton}`} onClick={onClick}></button>
    )
}