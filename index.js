// import data and funtion
import { students } from "./data.js";
import { getRank, calcAverage, addNewStudent, searchStudentByName, updateScorByName } from "./utils.js";

// 1. Add the new student
addNewStudent(students, { name: "Phuong", age: 33, score: 10 })

// 2. show the list student and rank

const rankedStudents = students.map(s => ({
    ...s,
    rank: getRank(s.score)
}))

for( let student of rankedStudents){
    console.log(`name: ${student.name}, age: ${student.age}, score: ${student.score}, rank: ${student.rank}`);
}

// 3. Caculator the average score students
const avg = calcAverage(students);
console.log(`the average score students in the class is ${avg}`);

// 4. Search name student
console.log (searchStudentByName(students, "phuong"));

// 5. Edit student 
console.log(updateScorByName(students, "Phuong", 9));