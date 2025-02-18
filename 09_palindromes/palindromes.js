const palindromes = function (str) {
    let lwrStr = str.toLowerCase();
    let lettersArray = lwrStr.split('').filter(char => /[a-zA-Z0-9]/.test(char));
    testStr = lettersArray.join('');
    let reverseArr = lettersArray.slice().reverse();
    reverseStr = reverseArr.join('');
    if (testStr == reverseStr) {
        return true;
    } else return false;
};

// Do not edit below this line
module.exports = palindromes;
