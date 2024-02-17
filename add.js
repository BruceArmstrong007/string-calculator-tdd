function add(operands) {
    let result = 0;
    const addArr = operands.split(',');
    addArr.forEach(element => {
        result += Number(element) ? Number(element) : 0;
    });
    return result;
}


module.exports = add;