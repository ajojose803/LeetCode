/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function(title) {
    const words = title.toLowerCase().split(' ');
    // console.log(words.join(' '));
    for(let i = 0; i < words.length; i++){
        if(words[i].length >= 3){
           words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
           
        }

    }
    return words.join(' ');
};