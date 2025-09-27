function getRank(score){
    if(score >= 8) return "Very Good";
    if(score < 8 & score >= 6) return "Good";
    return "Medium";
}

function calcAverage(arr){
    return ((arr.reduce((sum, s) => sum + s.score, 0))/arr.length).toFixed(2);
}

function addNewStudent(arr, newStudent){
    return arr.push(newStudent);
}

function searchStudentByName(arr, name){
    return arr.filter(s => s.name.includes(name.toLowerCase()));
}

function updateScorByName(arr, name,  score){
    const student = arr.find(s => s.name.toLowerCase() == name.toLowerCase());
    if(student){
        student.score == score;
        return `update ${name}: score ${score}`
    } else `No find student`
}

export {getRank, calcAverage, addNewStudent, searchStudentByName, updateScorByName};