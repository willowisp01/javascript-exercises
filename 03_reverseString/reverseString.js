const reverseString = function(string) {
    const charArray = string.split(""); 
    let answer = ""; 
    for (let i = charArray.length - 1; i >= 0; i--) {
        answer += charArray[i];
    }
    return answer;
};

// Do not edit below this line
module.exports = reverseString;
