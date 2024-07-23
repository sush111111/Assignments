/*
Task 4: Use map, reduce, and filter to calculate the average of squared odd numbers in an array.
Write a JavaScript function that takes an array of numbers as input and calculates the average of the squares of all odd numbers in the array.
*/

function odd(x){
  if(x%2==0) return false;

  return true;
}

function avg(arr){
   let n = arr.length;
   let sum = arr.reduce(((acc,x) => acc+x ),0)
   return sum/n;
}

function avgSqrOdd(arr){
    let oddNumbers = arr.filter(odd);
    let square = oddNumbers.map(x => Math.pow(x,2));
    return avg(square);
}

let arr = [1,2,3,4,5,6,7,8,9,10];
let ans = avgSqrOdd(arr);
console.log("The average of the square of odd numbers of the array array: ",ans);