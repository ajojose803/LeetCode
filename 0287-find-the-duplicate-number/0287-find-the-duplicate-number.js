/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
let slow = nums[0];
let fast = nums[0];

do{
    slow = nums[slow];
    fast= nums[nums[fast]];
} while (slow!== fast);

slow2 = nums[0];
while(slow2 !== slow) {
    slow= nums[slow];
    slow2 = nums[slow2];
}
return slow2;
};