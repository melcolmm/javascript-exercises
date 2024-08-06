const reverseString = function(text) {
    stringLength = text.length;
    let reverse = ""
    for (i = stringLength; i >= 0; i--) {
        reverse = reverse + text.charAt(i);
    }
    return reverse;
};

// Do not edit below this line
module.exports = reverseString;
