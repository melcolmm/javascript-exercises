const sumAll = function(numOne, numTwo) {
    let total = 0;
    if (numOne < 0 || numTwo < 0) {
        return "ERROR";
    }

    if (Number.isInteger(numOne) == false || Number.isInteger(numTwo) == false) {
        return "ERROR";
    }

    if (numOne * 1 != numOne || numTwo * 1 != numTwo) {
        return "ERROR";
    }
    
    if (numOne < numTwo) {
        numStart = numOne;
        numEnd = numTwo;
    } else {
        numStart = numTwo;
        numEnd = numOne;
    }

    for (let i = numStart; i <= numEnd; i++) {
        total = total + i;
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
