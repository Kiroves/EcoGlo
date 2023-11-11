
function splitString(str, b) {
    const index = str.indexOf(b);

    if (index !== -1) {
        console.log("found")
        const before = str.slice(0, index);
        const after = str.slice(index + b.length);
        return before;
    } else {
        console.log(" not found")
        return str;
    }
}

module.exports = splitString;