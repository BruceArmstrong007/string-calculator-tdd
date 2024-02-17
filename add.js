function add(operands) {
    let result = 0;
    let negative = [];
    let addArr = splitArr(operands);
    addArr.forEach(element => {
        const number = Number(element);
        if(number) {
            if(Math.sign(number) !== -1) result += number;
            else negative.push(number);
        } else {
            if(element.search('\n')) {
                let tempArr = element.replaceAll('\n', ',').split(',');
                tempArr.forEach(element => {
                    result += Number(element);
                });
            }
        }
    });

    // exception message for negative numbers
    console.log('these negative numbers are not added \n', negative.join(','));


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