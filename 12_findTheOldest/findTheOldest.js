const findTheOldest = function(people) {
    const d = new Date();
    let testElement = people[0];
    people.forEach(element => {
        if (getAge(element) > getAge(testElement)) {
            testElement = element;
        }
    });
        return testElement;

    function getAge(arg) {
        let age = 0;
        if (arg.yearOfDeath) {
                age = arg.yearOfDeath - arg.yearOfBirth;
        } else {
            age = d.getFullYear() - arg.yearOfBirth;
        }
        return age;
    }
};

// Do not edit below this line
module.exports = findTheOldest;
