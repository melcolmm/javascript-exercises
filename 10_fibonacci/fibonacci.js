const fibonacci = function(input) {
    num = parseInt(input);
    if (num < 0) {
        return "OOPS";
    }
    let num1 = 1;
    let num2 = 1;
    let sum;
    if (num === 0) {
        return 0;
    } else if (num === 1) {
        return num1;
    } else if (num === 2) {
        return num2;
    } else {
        for (let i = 3; i <= num; i++) {
            sum = num1 + num2;
            num1 = num2;
            num2 = sum;
        }
        return num2;
    }
};

// Do not edit below this line
module.exports = fibonacci;
