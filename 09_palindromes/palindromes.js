function isAlphaNumeric(str) {
    let code, i, len;
  
    for (i = 0, len = str.length; i < len; i++) {
      code = str.charCodeAt(i);
      if (!(code > 47 && code < 58) && // numeric (0-9)
          !(code > 64 && code < 91) && // upper alpha (A-Z)
          !(code > 96 && code < 123)) { // lower alpha (a-z)
        return false;
      }
    }
    return true;
  };

const myPalindromes = function(string) {
    string = string.toLowerCase();
    let charArray = string.split(""); 
    charArray = charArray.filter((char) => isAlphaNumeric(char));
    // this is leetcode style lol
    startIdx = 0;
    endIdx = charArray.length - 1;
    while (startIdx <= endIdx) {
        if (charArray[startIdx] != charArray[endIdx]) {
            return false;
        }
        startIdx++;
        endIdx--;
    }
    return true;
};

const palindromes = function(string) {
    let cleanedString = string
        .toLowerCase()
        .split("")
        .filter((char) => isAlphaNumeric(char))
        .join("");

    let backwardsCleanedString = cleanedString
        .split("")
        .reverse()
        .join("");
        
    return cleanedString === backwardsCleanedString;
};

// Do not edit below this line
module.exports = palindromes;
