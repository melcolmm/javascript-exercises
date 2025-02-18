const getTheTitles = function(books) {
    let arrOut = [];
            books.forEach(element => {
                console.log(element);
                for (let key in element) {
                    if (key == "title") {
                        arrOut.push(element[key]);
                    }
                }
            });
            return arrOut;
};

// Do not edit below this line
module.exports = getTheTitles;
