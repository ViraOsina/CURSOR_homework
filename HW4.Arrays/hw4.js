const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];


//task 1
function studentPairs(students) {
    const girls = [];
    const boys = [];
    const pairs = [];

    for (let i = 0; i < students.length; i++) {
        if (students[i].split("").slice(-1).pop() === "а") {
            girls.push(students[i]);
        } else {
            boys.push(students[i]);
        }
    }

    const pairsLength = (students.length) / 2;

    for (let i = 0; i < pairsLength; i++) {
        pairs.push(` ${boys[i]}, ${girls[i]}`);
    }

    return pairs;
}

const result1 = document.getElementById("Task1");
function output1() {
    result1.innerHTML = studentPairs(students);
}

//task 2
const pairs = studentPairs(students);
function pairsThemes(pairs, themes) {
    let themesForPairs = [];

    for (let i = 0; i < pairs.length; i++) {
        themesForPairs.push(pairs[i].split(",").join(" і ").concat(": ").concat(themes[i]));
    }

    return themesForPairs;
}

const result2 = document.getElementById("Task2");
function output2() {
    result2.innerHTML = pairsThemes(pairs, themes);
}

//task 3
function studentGrades(students, marks) {
    let studentMarks = [];

    for (let i = 0; i < students.length; i++) {
        studentMarks[i] = [students[i], marks[i]];
    }

    return studentMarks;
}

const result3 = document.getElementById("Task3");
function output3() {
    result3.innerHTML = studentGrades(students, marks);
}

//task 4
const pairThemes = pairsThemes(pairs, themes);
function pairRandomGrades(pairThemes) {
    let pairGrades = [];

    for (let i = 0; i < pairThemes.length; i++) {
        pairGrades[i] = [pairThemes[i].concat(" - ").concat([randomNum()])];
    }

    return pairGrades;
}

function randomNum() {
    return Math.floor((Math.random() * 5) + 1);
}

const result4 = document.getElementById("Task4");
function output4() {
    result4.innerHTML = pairRandomGrades(pairThemes);
}