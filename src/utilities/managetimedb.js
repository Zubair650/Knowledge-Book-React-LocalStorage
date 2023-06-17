const addToTimeDb = id => {
    let bookTime = getTime();
    const q = bookTime[id];
    if (!q) {
        bookTime[id] = 1;
    }
    else {
        const newQ = q + 1;
        bookTime[id] = newQ;
    }
    localStorage.setItem('time', JSON.stringify(bookTime));
}

const getTime = () => {
    let bookTime = {};
    const storedTime = localStorage.getItem('time');
    if (storedTime) {
        bookTime = JSON.parse(storedTime);
    }
    return bookTime;
}

export {
    addToTimeDb,
    getTime
}
