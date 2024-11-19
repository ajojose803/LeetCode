const maxSubArray = (nums) => {
  let prev = 0; 
  let max = -Infinity; 
    
    for (let i = 0; i < nums.length; i++) { 
        const curr = nums[i]; 
        prev = Math.max(prev + curr, curr); 
        max = Math.max(prev, max) 
    }
    return max
}