/*
* Write a function below that accepts a string as a parameter
* and find the longest word within the string.
* Example string: "What is the longest word in this string"
*/

/**
 * finds the 1º longest word in the string
 * @param {string} str
 * @return {string} longestWord
 */
function longestStr(str) {
    const strArr = str.split(" ");
    let longestWord = "";
    let maxCount = -1;
    for (let index = 0; index < strArr.length; index++) {
        strArr[index];
        const strL = strArr[index].length;
        if (maxCount < strL) {
            maxCount = strL;
            longestWord = strArr[index];
        }
    }

    return longestWord;
}

console.log(longestStr("What is the longest word in this string"));