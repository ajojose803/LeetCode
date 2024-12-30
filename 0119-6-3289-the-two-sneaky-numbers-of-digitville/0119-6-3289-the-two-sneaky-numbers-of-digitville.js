/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function (nums) {
    const numbers = {};
    for (let i = 0; i < nums.length; i++) {
        numbers[nums[i]] = (numbers[nums[i]] || 0) + 1;
    }

    let culprits = [];
    for (let key in numbers) {
        if (numbers[key] > 1) {
            culprits.push(Number(key));
        }
    }

    return culprits;
};