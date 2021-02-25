function isText(obj) {
    return typeof obj === 'string' || typeof obj === 'number';
}

console.log(isText(true))