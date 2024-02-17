function add(operands) {
    let result = 0;
    const addArr = operands.split(',');
    addArr.forEach(element => {
        if(element.includes('\n')) element.replaceAll('\n',"");
        result += Number(element) ? Number(element) : 0;
    });
    return result;
}


module.exports = add;