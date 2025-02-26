/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let string = x.toString();
    let reversed = string.split('').reverse().join("");
    return string === reversed;
    
};