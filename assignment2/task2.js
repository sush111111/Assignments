/*
Task 2: Use reduce to find the sum of all elements in an array.
Write a JavaScript function that takes an array of numbers as input and returns the sum of all elements.
*/

function sum(arr){
    return arr.reduce((acc,x) => acc+x)
}

let arr = [1,2,3,4,5,6,7,8,9,10];
let totSum = sum(arr);
console.log("Total sum of the given array: ",totSum);