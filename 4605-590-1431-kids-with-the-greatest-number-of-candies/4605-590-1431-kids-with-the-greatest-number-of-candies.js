/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
   let max2 = Math.max(...candies);
    answer = [];
    for (let i = 0; i < candies.length; i++) {
        if (candies[i]+extraCandies>=max2) {
            answer.push(true);
        } else{
            answer.push(false);
        }
        
    }
    return answer;

};