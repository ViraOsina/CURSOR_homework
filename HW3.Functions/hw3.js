//task 1
const result1 = document.getElementById("Task1");
function getMaxDigit(number) {
    if (number == 0) {
        return 0;
    }
    else {
        let numArray = number.split('');
        return Math.max.apply(null, numArray);
    }
}

//task 2
const result2 = document.getElementById("Task2");
function getPower(base, power) {
    let result = 1;
    for (let i = 0; i < power; i++) {
        result = result * base;
    }
    return result;
}

//task 3
const result3 = document.getElementById("Task3");
function firstLetterUp(text) {
    return text[0].toUpperCase() + text.slice(1).toLowerCase();
}

//task 4
const result4 = document.getElementById("Task4");
function netWage(wage, tax) {
    return wage - (wage * tax / 100);
}

//task 5
const result5 = document.getElementById("Task5");
function randomNumber(minNum, maxNum) {
    return Math.floor(minNum + Math.random() * (maxNum + 1 - minNum));
}

//task 6
const result6 = document.getElementById("Task6");
function findLetter(text, letter) {
    let count = 0;
    const lowerCaseText = text.toLowerCase().split('');
    const lowerCaseLetter = letter.toLowerCase();
    lowerCaseText.forEach((el) => el == lowerCaseLetter ? count++ : count);
    return count;
}

//task 7
const result7 = document.getElementById("Task7");
function currencyConverter(currencySum) {
    const currencyRate = 27.30;
    let convertedSum = null;
    const initialSum = +currencySum.replace(/[^0-9]/gi, '');
    if (currencySum.includes("uah")) {
        convertedSum = (initialSum / currencyRate).toFixed(2) + '$';
        return convertedSum;
    } else if (currencySum.includes('$')) {
        convertedSum = initialSum * currencyRate + 'UAH';
        return convertedSum;
    } else {
        return 'Невірно вказана валюта';
    }
}

//task 8
const result8 = document.getElementById("Task8");
function passGenerator(passLength = 8) {
    passLength = passLength || 8;
    let password = '';
    for (let i = 0; i < passLength; i++) {
        password += Math.floor(Math.random() * 10);
    }
    return password;
}

//task 9
const result9 = document.getElementById("Task9");
function removeLetter(letter, text) {
    return text.split('').filter((el) => el != letter).join('');
}

//task 10
const result10 = document.getElementById("Task10");
function palindrom(word) {
    const initialWord = word.split('');
    const reverseWord = initialWord.reverse();
    if (initialWord === reverseWord) {
        return true;

    } else {
        return false;
    }
}

//task 11
const result11 = document.getElementById("Task11");
function removeDuplicates(text) {
    let count = 0;
    const letters = text.split('');
    for (let i = 0; i < text.length; i++) {
        
        letters.forEach((el) => el == text[i] ? count++ : count);
        if (count > 0) {
            return letters.filter((el) => el != text[i]).join(''); 
        } else {
            return text;   
        }        
    }
}


//DOM outputs
function output1() {
    let number = document.getElementById("getMaxDigit").value;
    result1.innerHTML = getMaxDigit(number);
    console.log("Task1", "input ", number, "result ", getMaxDigit(number));
}

function output2() {
    let base = document.getElementById("base").value;
    let power = document.getElementById("power").value;
    result2.innerHTML = getPower(base, power);
    console.log("Task2", "base ", base, "power ", power, "result ", getPower(base, power));
}

function output3() {
    let text = document.getElementById("firstLetterUp").value;
    result3.innerHTML = firstLetterUp(text);
    console.log("Task3", "text ", text, "result ", firstLetterUp(text));
}

function output4() {
    let wage = document.getElementById("netWage").value;
    let tax = document.getElementById("taxRate").value;
    result4.innerHTML = netWage(wage, tax);
    console.log("Task4", "wage ", wage, "tax ", tax, "result ", netWage(wage, tax));
}

function output5() {
    let firstNum = document.getElementById("randomNumber1").value;
    let secondNum = document.getElementById("randomNumber2").value;
    let minNum = Math.min(firstNum, secondNum);
    let maxNum = Math.max(firstNum, secondNum);
    result5.innerHTML = randomNumber(minNum, maxNum);
    console.log("Task5", "first number ", firstNum, "second number ", secondNum,
        "result ", randomNumber(minNum, maxNum));
}

function output6() {
    let text = document.getElementById("findLetterText").value;
    let letter = document.getElementById("findLetter").value;
    result6.innerHTML = findLetter(text, letter);
    console.log("Task6", "text ", text, "letter ", letter, "result ", findLetter(text, letter));
}

function output7() {
    let currencySum = document.getElementById("currencyConverter").value.toLowerCase();
    result7.innerHTML = currencyConverter(currencySum);
    console.log("Task7", "sum to be converted ", currencySum, "result ", currencyConverter(currencySum));
}

function output8() {
    let passLength = document.getElementById("passGenerator").value;
    result8.innerHTML = passGenerator(passLength);
    console.log("Task8", "password length ", passLength, "result ", passGenerator(passLength = 8));
}

function output9() {
    let text = document.getElementById("removeLetterText").value.toLowerCase();
    let letter = document.getElementById("removeLetter").value.toLowerCase();
    result9.innerHTML = removeLetter(letter, text);
    console.log("Task9", "text ", text, "letter ", letter, "result ", removeLetter(letter, text));
}

function output10() {
    let word = document.getElementById("palindrom").value.toLowerCase();
    result10.innerHTML = palindrom(word);
    console.log("Task10", "word ", word, "result ", palindrom(word));
}
function output11() {
    let text = document.getElementById("removeDuplicates").value.toLowerCase();
    result11.innerHTML = removeDuplicates(text);
    console.log("Task11", "text ", text, "result ", removeDuplicates(text));
}