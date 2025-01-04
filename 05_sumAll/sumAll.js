const sumAll = function(start, end) {
    if (!Number.isInteger(start) || !Number.isInteger(end) || start < 0 || end < 0) {
        return 'ERROR';
    }
    if (start > end) {
        temp = start;
        start = end; 
        end = temp;
    }
    let answer = 0;
    while (start <= end) {
        answer += start;
        start++;
    }
    return answer;
};

// Do not edit below this line
module.exports = sumAll;
