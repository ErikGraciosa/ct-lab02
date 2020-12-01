const capitalizeAndFilter = (arr) => {
    const newArray = arr.filter(string => string[0] != 'f')
        .map(string => string.toUpperCase());
    return newArray;
}

module.exports = { capitalizeAndFilter }
