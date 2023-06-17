const addToDb = id => {
    let bookMarked = getBookMarked();
    const quantity = bookMarked[id];
    if (!quantity) {
        bookMarked[id] = 1;
    }
    else {
        const newQuantity = quantity + 1;
        bookMarked[id] = newQuantity;
    }
    localStorage.setItem('bookmark', JSON.stringify(bookMarked));
}

const getBookMarked = () => {
    let bookMarked = {};
    const storedCart = localStorage.getItem('bookmark');
    if (storedCart) {
        bookMarked = JSON.parse(storedCart);
    }
    return bookMarked;
}

const addNameToDb = name => {
    let bookMarkedname = bookmarkedName();
    const bookedName = bookMarkedname[name];
    if (!bookedName) {
        bookMarkedname[name] = 1;
    }
    else {
        const newQuan = bookedName + 1;
        bookMarkedname[name] = newQuan;
    }
    localStorage.setItem('bookmark-name', JSON.stringify(bookMarkedname));
}

const bookmarkedName = () => {
    let bookMarkedname = {};
    const storedName = localStorage.getItem('bookmark-name');
    if (storedName) {
        bookMarkedname = JSON.parse(storedName);
    }
    return bookMarkedname;
}

export {
    addToDb,
    getBookMarked,
    bookmarkedName,
    addNameToDb
}
