const leapYears = function(year) {
    if (year % 4 !== 0) { // not divisible by 4
        return false;
    } 
    if (year % 100 === 0 && year % 400 !== 0) { // divisible by 100, but not by 400
        return false; 
    }
    return true;
};

// Do not edit below this line
module.exports = leapYears;
