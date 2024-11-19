/**
 * @param {number} n
 * @return {number}
 */
var smallestEvenMultiple = function (n) {
    if (n % 2) {
        return n * 2;
    } else {
        return n;
    }
    // return n%2 ? n * 2 : n;

};