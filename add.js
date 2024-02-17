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
        const splitChar = operands.charAt(2);
        addArr = (operands.split('//'+splitChar)[1]).split(splitChar);
    } else {
    addArr = operands.split(',');
    } 
    return addArr;
}


module.exports = add;