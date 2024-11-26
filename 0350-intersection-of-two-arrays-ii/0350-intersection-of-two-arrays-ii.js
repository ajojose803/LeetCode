/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    const map = {};
    for (let n of nums1) {
       map[n] = map[n]+ 1 || 1; 
    }

    const result = [];

    for (const n of nums2) {
        if( map[n] && map[n] > 1 ) {
            result.push(n);
            map[n] = map[n] - 1;
        } else if (map[n] && map[n] === 1) {
            result.push(n)
            delete map[n];
        }
    }

    return result;
};