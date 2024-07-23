/*
Task 1: Use map to convert an array of numbers into an array of their cubes.
Write a JavaScript function that takes an array of numbers as input and returns a new array containing the cubes of each number.
*/

function cube(arr) {
    return arr.map(x => Math.pow(x,3));
}

let arr = [1,2,3,4,5,6,7,8,9,10];
let cubeOfNum = cube(arr);
console.log("Cube of the array: ",cubeOfNum);