/*
Task 8: Create a Private Counter for Multiple Instances
Write a closure-based function that creates multiple instances of a private counter. Each instance should have its own count, independent of the others. For example:

const counter1 = createInstanceCounter();
const counter2 = createInstanceCounter();

console.log(counter1()); // Output: 1
console.log(counter1()); // Output: 2
console.log(counter2()); // Output: 1
console.log(counter2()); // Output: 2
*/

function createInstanceCounter(){
    let count =0;

    return function(){
        count+=1;
        return count;
    }
}

let counter1 = createInstanceCounter();
let counter2 = createInstanceCounter();
let counter3 = createInstanceCounter();

console.log(counter1()); 
console.log(counter1()); 
console.log(counter3()); 
console.log(counter2()); 
console.log(counter2());
console.log(counter2());
console.log(counter3()); 
console.log(counter3()); 
console.log(counter3()); 