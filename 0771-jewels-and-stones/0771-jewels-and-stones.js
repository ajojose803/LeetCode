/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
    count = 0;
    for (let s of stones) {
        for (let jewel of jewels) {
            if (jewel === s) {
                count++;
            }
        }
    }
    return count;
};