/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */

var findWordsContaining = function (words, x) {
    let arr = [];
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        if(word.indexOf(x) !== -1) {
            arr.push(i);
        }
    }
    return arr;
};