/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (array) {
    while (array.length) {
        const n = array.pop()
        if (array.includes(n * 2) || array.includes(n / 2)) return true
    }
    return false
}