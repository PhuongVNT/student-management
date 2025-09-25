// import data and funtion
import { students } from "./data.js";
import { getRank, calcAverage } from "./utils.js";

// 1. show the list student and rank

const rankedStudents = students.map(s => ({
    ...s,
    rank: getRank(s.score)
}))

for( let student of rankedStudents){
    console.log(`name: ${student.name}, age: ${student.age}, score: ${student.score}, rank: ${student.rank}`);
}

// 2. Caculator the average score students
const avg = calcAverage(students);
console.log(`the average score students in the class is ${avg}`);