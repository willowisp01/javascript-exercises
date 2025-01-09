const fibonacci = function(input) {
    input = +input;
    if (Number.isNaN(input)) {
        return "OOPS";
    }
    if (input < 0) {
        return "OOPS"; 
    }
    if (input <= 1) {
        return input;
    }
    let prev = 0;
    let curr = 1;
    for (let i = 2; i <= input; i++) {
        let temp = prev + curr; 
        prev = curr;
        curr = temp;
    }
    return curr;
};

// Do not edit below this line
module.exports = fibonacci;
