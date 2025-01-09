const findTheOldest = function(people) {
    let currentYear = new Date().getFullYear();
    // assuming array not empty
    return people.reduce((oldestSoFar, current) => 
        getAge(current, currentYear) > getAge(oldestSoFar, currentYear) ? current : oldestSoFar
    );
};

function getAge(person, currentYear) {
    if (!("yearOfDeath" in person)) {
        return currentYear - person.yearOfBirth; 
    }
    return person.yearOfDeath - person.yearOfBirth;
}

// Do not edit below this line
module.exports = findTheOldest;
