const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
        math: [4, 4, 3, 4],
        algorithms: [3, 3, 3, 4, 4, 4],
        data_science: [5, 5, 3, 4]
    }
}, {
    name: "Victor",
    course: 4,
    subjects: {
        physics: [5, 5, 5, 3],
        economics: [2, 3, 3, 3, 3, 5],
        geometry: [5, 5, 2, 3, 5]
    }
}, {
    name: "Anton",
    course: 2,
    subjects: {
        statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
        english: [5, 3],
        cosmology: [5, 5, 5, 5]
    }
}];

//Створіть функцію getSubjects(students[0] --> ["Math", "Algorithms", "Data science"] 
//- яка повертає список предметів для конкретного студента.
function getSubjects (student) {
    let studentSubjects = Object.keys(student.subjects);
    const listOfSubjects = studentSubjects.map(subject =>
        subject[0].toUpperCase() + subject.slice(1).replaceAll('_', " ")
    );
    return listOfSubjects;
}

console.log('task 1. List of subjects for student: ', getSubjects(students[0]));

//Створіть функцію getAverageMark(students[0]) --> 3.79  
//– яка поверне середню оцінку по усім предметам для переданого студента.

function getAverageMark(student) {
    let marks = Object.values(student.subjects).flat();
    let averageMark = (marks.reduce((sum, mark) => sum + mark) / marks.length).toFixed(2);
    return averageMark;
}

console.log('task 2. Average grade: ', getAverageMark(students[0]));

//Створіть функцію getStudentInfo(students[0]) --> { "course": 3, "name": "Tanya", "averageMark": 3.79} 
//– яка повертає інформацію загального виду по переданому студенту .

function getStudentInfo(student){
    const course = student.course;
    const name = student.name;
    const averageMark = getAverageMark(student);
    return { course, name, averageMark };
}

console.log('task 3.', getStudentInfo(students[0]));

//Ствoріть функцію getStudentsNames(students) --> ["Anton", "Tanya, "Victor"] 
//– яка повертає імена студентів у алфавітному порядку.

function getStudentsNames(students){
    return students.map((student) => student.name).sort();
}

console.log('task 4.', getStudentsNames(students));

//Створіть функцію getBestStudent(students) --> "Anton" 
//– яка повертає кращого студента зі списку по показнику середньої оцінки.

function getBestStudent(students){
    let averageGrades = [];
    for (let i = 0; i < students.length; i++) {

        let averageGrade = +getAverageMark(students[i]);
        averageGrades.push(averageGrade);
        averageGrades.sort((a,b) => b - a);

        if (averageGrade === averageGrades[0]) {
            return students[i].name;
        }
    }
}

console.log('task 5. Best student: ', getBestStudent(students));

//Створіть функцію calculateWordLetters("тест") --> { "т": 2, "е": 1, "с": 1 } 
//– яка повертає обє'кт, в якому ключі це букви у слові, а значення – кількість їх повторень.

function calculateWordLetters(word){
    const newWord = word.toLowerCase().split('');
    const letterCount = {};
    for (let i = 0; i < word.length; i++) {
        letterCount[newWord[i]] = word.split(newWord[i]).length - 1; 
      }
    return letterCount;
}

console.log('task 6.', calculateWordLetters("test"));


