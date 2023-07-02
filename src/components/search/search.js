import { useState } from "react";
import { get, ref } from "firebase/database";
import { db } from "../../firebase";
import { debounce, search } from '../../utils/utils';
import styles from './search.module.css';

export const Search = ({ setToDoList, activeAddInput, setActiveAddInput }) => {

    const [value, setValue] = useState('');

    const debounceSearch = debounce(search, 300);

    const onChange = ({target}) => {
        setValue(target.value);
        if (target.value.length > 0) {
            debounceSearch(target.value, setToDoList);
        } else {
            const toDoDbRef = ref(db, 'todos');
            get(toDoDbRef)
                .then((data) => setToDoList(data.val()));
        }
    }

    return (
        <input
            className={!activeAddInput ? `${styles.activeSearchInput}` : `${styles.searchInput}`}
           type="text"
           placeholder="Поиск..."
           value={value}
           onFocus={() => setActiveAddInput(false)}
           onChange={onChange}
        ></input>
    )
}