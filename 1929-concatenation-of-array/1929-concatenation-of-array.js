/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function (nums) {
    let array1 = [];
    for (let i = 0; i < nums.length; i++) {
        array1[i] = nums[i];
        array1[i + nums.length] = nums[i];

    }
    return array1;
};