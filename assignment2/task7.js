/*
Task 7: Use filter to find all students who passed the exam.
Write a JavaScript function that takes an array of student objects (with properties name and score) as input and returns an array containing only the students who passed the exam (scored 60 or above).
*/

function passedStudents(students){
    return students.filter(x => x.marks>=60)
}

let students = [
    {name:"Susmita", marks:"90"},
    {name:"Shreya", marks:"80"},
    {name:"Siya", marks:"40"},
    {name:"Sukriti", marks:"60"},
    {name:"Sania", marks:"30"}
]

console.log("Passed students are: ", passedStudents(students))