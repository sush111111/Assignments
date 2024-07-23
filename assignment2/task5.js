/*
Task 5: Use map, reduce, and filter to find the longest string in an array of strings.
Write a JavaScript function that takes an array of strings as input and returns the longest string from the array.
*/

function longestString(arrOfStrings){
    let lengthsOfStrings = arrOfStrings.map(x => x.length);
    let maxLen = lengthsOfStrings.reduce((max,currLen) => Math.max(max, currLen),0);
    let longest = arrOfStrings.filter(s => s.length == maxLen)

    return longest.length>0 ? longest[0] : '';
}

let arr = ["a","ab","abc","apple","a","c"]
let stringOfMaxLen = longestString(arr);
console.log("Longest string in the given array is: ", stringOfMaxLen)