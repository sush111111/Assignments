/*
Task 10: Calculate Total Score
Write a JavaScript function that takes an array of objects, where each object contains a property score, and uses the forEach method to calculate the total score of all the objects in the array. Return the total score as the output.
*/

function totScore(objs){
    let tot=0;
    objs.forEach(obj => {
        tot+= obj.score;
    })
    return tot;
}

let objs = [
    {score:10},
    {score:20},
    {score:30},
    {score:40},
    {score:50}
]

console.log("Total score of the given object = ", totScore(objs));