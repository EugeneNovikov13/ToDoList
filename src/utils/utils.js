export const debounce = (func, delay) => {
    let timeoutId;

    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

export const search = (val, showSearchResult) => {
    fetch('http://localhost:3004/todos')
        .then(loadedData => loadedData.json())
        .then(data => {
            const filteredResult = data.filter(obj => obj.text.toLowerCase().includes(val));
            showSearchResult(filteredResult);
        });
}

export const getTimeStamp = () => {
    return (new Date).toLocaleString()
}
