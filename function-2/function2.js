const copyAndPush = (newArray, newItem) => {
    const copiedArray = [...newArray, newItem];
    return copiedArray;
}

module.exports = { copyAndPush }
