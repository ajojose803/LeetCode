/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    let result = nums[0];
    let left = 0;
    let right = nums.length - 1;
   
    while (left < right) {
        mid = Math.floor((left + right) / 2);
        result = nums[mid];
        if (nums[mid] > nums[right]) {
            left = mid + 1;
        } else  {
            right = mid;
        }
    }
    return nums[left];
};