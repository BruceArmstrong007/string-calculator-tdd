function add(operands) {
    let result = 0;
    const addArr = operands.split(',');
    addArr.forEach(element => {
        result += Number(element);
    });
    return result;
}


module.exports = add;