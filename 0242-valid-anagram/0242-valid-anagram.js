/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if(s.length !== t.length) return false;
    const word1 = s.split('').sort().join('');
    const word2 = t.split('').sort().join('');
    return word1 === word2;
    

    // for (let i = 0; i < s.length; i++) {
    //     if(string1[i] !== string2[i]) {
    //         return false;
    //     };
    // }
    // return true;
};