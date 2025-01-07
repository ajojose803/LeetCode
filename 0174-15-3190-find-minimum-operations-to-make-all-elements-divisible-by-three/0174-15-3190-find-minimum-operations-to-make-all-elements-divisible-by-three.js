/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    count = 0;
    if(nums.length == 0){
        return 0;
    }
    
    for(let i = 0; i<nums.length;i++){
        if(nums[i]%3!=0){
            count++
        }
    }
        return count;
};