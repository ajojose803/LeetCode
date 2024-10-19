/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (nums, target) {
   const map = new Map();
   for(let i = 0; i<= nums.length; i++){
    const num = nums[i];
    const value = target - num;
    const valueIndex = map.get(value);

    const isTarget = map.has(value);
    if(isTarget) return [i,valueIndex];
    map.set(num,i)
   }
    return [];
}


// var twoSum = function (nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] + nums[j] == target) {
//                 return [i, j];
//             }
//         }
//     }
//     return [];
// }