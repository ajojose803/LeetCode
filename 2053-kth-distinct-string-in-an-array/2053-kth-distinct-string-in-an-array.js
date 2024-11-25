/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function (arr, k) {
    const map = {};
    const a = [];

    for (let word of arr) {
        if (!map[word]) {
            map[word] = 1
        } else {
            map[word]++;
        }
    }

    for (let [key, val] of Object.entries(map)) {
        if (val === 1) {
            a.push(key)
        }
    }

    return a[k - 1] || "";
};