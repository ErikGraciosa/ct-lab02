const capitalizeAndFilter = (arr) => {
    const newArray = [];
    for( let i = 0; i < arr.length; i ++) {
        if(arr[i][0] != 'f') {
            newArray.push(arr[i].toUpperCase());
        }
    }
    return newArray;
}

module.exports = { capitalizeAndFilter }
