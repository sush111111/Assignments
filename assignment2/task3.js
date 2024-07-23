/*
Task 3: Use filter to find all prime numbers in an array.
Write a JavaScript function that takes an array of numbers as input and returns a new array containing only the prime numbers.
*/

function isPrime(x){
    console.log("called",x)
    if(x<=1)
        return false;
    for(let i=2;i<=Math.sqrt(x);i++){
        if(x%i === 0)
            return false;
    }
    return true;
}

function prime(arr){
    return arr.filter(isPrime)
}

let arr = [1,2,3,4,5,6,7,8,9,10];
let allPrimeNumbers = prime(arr);
console.log("All prime numbers are: ",allPrimeNumbers);