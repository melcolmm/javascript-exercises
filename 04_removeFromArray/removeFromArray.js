const removeFromArray = function(test) {
    let source = arguments[0];
    
    let index = "";
    for (let i = 1; i < arguments.length; i++) {
        let remove = arguments[i];
        for (let j = 0; j < source.length; j++) {
            index = source.indexOf(remove);
            if (index >= 0) {
                source.splice(index,1);
            }
        }
    }
    return source;
};

// Do not edit below this line
module.exports = removeFromArray;
