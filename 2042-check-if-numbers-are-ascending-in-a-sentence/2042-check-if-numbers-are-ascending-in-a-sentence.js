/**
 * @param {string} s
 * @return {boolean}
 */
var areNumbersAscending = function (s) {
    let arr = [];
    let words = s.split(" ");
    
    // Extract numbers from the string
    for (let i = 0; i < words.length; i++) {
        let num = parseInt(words[i]);
        if (!isNaN(num)) {  // Check if the word is a valid number
            arr.push(num);
        }
    }

    // Check if numbers are strictly ascending
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] <= arr[i - 1]) {  
            return false;
        }
    }
    
    return true;
};
