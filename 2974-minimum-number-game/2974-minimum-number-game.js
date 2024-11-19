/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function (nums) {
    const nums2 = nums.sort((a, b) => a - b);
    let arr = [];
    for (let i = 0; i < nums.length - 1; i += 2) {
        arr.push(nums2[i + 1]);
        arr.push(nums2[i]);
    }
    return arr;
};