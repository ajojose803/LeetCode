/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function (nums) {
    let arr = nums.filter((v) => nums.indexOf(v) === nums.lastIndexOf(v))
        .reduce((sum, cur) => sum + cur, 0);

    return arr;
};