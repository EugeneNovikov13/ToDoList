import {debounce} from '../../utils/utils';
import styles from './search.module.css';

export const Search = ({setToDoList, activeAddInput, setActiveAddInput}) => {

    const search = (val) => {
        fetch('http://localhost:3004/todos')
            .then(loadedData => loadedData.json())
            .then(loadedToDos => {
                const filteredResult = loadedToDos.filter(obj => obj.text.toLowerCase().includes(val));
                setToDoList(filteredResult);
            });
    }

    const debounceSearch = debounce(search, 300);

    return (
        <input className={!activeAddInput ? `${styles.activeSearchInput}` : `${styles.searchInput}`} type="text"
               placeholder="Поиск..."
               onFocus={() => setActiveAddInput(false)}
               onChange={({target}) => debounceSearch(target.value)}
        ></input>
    )
}