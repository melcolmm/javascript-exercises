const repeatString = function(inputString, repeats) {
    let finalString = "";
    if (repeats < 0) {
        return "ERROR";
    }
    for (let i = 0; i < repeats; i++) {
        finalString = finalString + inputString;
    }
    return finalString;
};

// Do not edit below this line
module.exports = repeatString;
