function add(operands) {
    let result = 0;
    const addArr = operands.split(',');
    addArr.forEach(element => {
        if(Number(element)) {
            result += Number(element);
        } else {
            let tempArr = element.replaceAll('\n', ',').split(',');
            tempArr.forEach(element => {
                result += Number(element);
            });
        }
    });
    return result;
}


module.exports = add;