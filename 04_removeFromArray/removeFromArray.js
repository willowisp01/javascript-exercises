const myRemoveFromArray = function(original, ...toBeRemoved) {
    for (let item of toBeRemoved) { 
        // while lets us remove multiple items.
        while (original.indexOf(item) >= 0) { // if item to be removed exists in the original
            //remove that item (in-place)
            original.splice(original.indexOf(item), 1);
        }
    }
    return original;
};

const removeFromArray = function(original, ...toBeRemoved) {
    // using filter. Include items not in toBeRemoved.
    return original.filter((item) => !toBeRemoved.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
