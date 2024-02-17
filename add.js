function add(operands) {
    let result = 0;
    let addArr = splitArr(operands);
    
    addArr.forEach(element => {
        if(Number(element)) {
            result += Number(element);
        } else {
            if(element.search('\n')) {
                let tempArr = element.replaceAll('\n', ',').split(',');
                tempArr.forEach(element => {
                    result += Number(element);
                });
            }
        }
    });
    return result;
}

function splitArr(operands) {
    if(operands.startsWith('//')) {
        operands = operands.replace('//','');
        addArr = operands.split(operands.chatAt(2));
    } else {
    addArr = operands.split(',');
    } 
    return addArr;
}


module.exports = add;