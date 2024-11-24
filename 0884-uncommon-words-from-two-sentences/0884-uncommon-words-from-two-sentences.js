/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function (s1, s2) {
    let wordCounts = {};
    let words = [...s1.split(' '), ...s2.split(' ')]

    for (let word of words) {
        if (!wordCounts[word]) {
            wordCounts[word] = 1;
        } else {
            wordCounts[word]++;
        }
    }
    a = [];

    for (let word in wordCounts) {
        if (wordCounts[word] == 1) {
            a.push(word);
        }
    }
    return a;
};