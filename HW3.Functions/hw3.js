//task 1
const result1 = document.getElementById("Task1");
function getMaxDigit(number){
    if (number == 0) {
        return 0;
    }
    else {
        return Math.max(number % 10, getMaxDigit(number / 10))
    }    
}


function output1(){
    let number = document.getElementById("getMaxDigit").value;
    result1.innerHTML = getMaxDigit(number);
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

function output2(){
    let base = document.getElementById("base").value;
    let power = document.getElementById("power").value;
    result2.innerHTML = getPower(base, power);
}

//task 3
const result3 = document.getElementById("Task3");
function firstLetterUp (text){
    return text[0].toUpperCase() + text.slice(1).toLowerCase();
}

function output3(){
    let text = document.getElementById("firstLetterUp").value;
    result3.innerHTML = firstLetterUp(text);
}

//task 4
const result4 = document.getElementById("Task4");
function netWage (wage, tax){
    return wage - (wage*tax/100);
}

function output4(){
    let wage = document.getElementById("netWage").value;
    let tax = document.getElementById("taxRate").value;
    result4.innerHTML = netWage(wage, tax);
}

//task 5
const result5 = document.getElementById("Task5");
function randomNumber (N, M){
    return Math.floor(N + Math.random() * (M + 1 - N));
}

function output5(){
    let firstNum = document.getElementById("randomNumber1").value;
    let secondNum = document.getElementById("randomNumber2").value;
    let N = Math.min(firstNum,secondNum);
    let M = Math.max(firstNum,secondNum);
    result5.innerHTML = randomNumber(N, M);
}

//task 6
const result6 = document.getElementById("Task6");
function findLetter(text, letter){
    let count = 0;
    text.split('').forEach((el) => el.toLowerCase() == letter.toLowerCase() ? count++ : count);
    return count;
}

function output6(){
    let text = document.getElementById("findLetterText").value;
    let letter = document.getElementById("findLetter").value;
    
    result6.innerHTML = findLetter(text, letter);
}

//task 7
const result7 = document.getElementById("Task7");
const currencyRate = 27.30;
function currencyConverter(currencySum){

    if (currencySum.includes("uah")) {
        currencySum = +currencySum.replace(/[^0-9]/gi, '');
        return (currencySum/currencyRate).toFixed(2) + '$';
    } else if (currencySum.includes('$')){
        currencySum = +currencySum.replace(/[^0-9a-z]/gi, '');
        return currencySum*currencyRate + 'UAH';
    } else {return 'Невірно вказана валюта';}
}

function output7(){
    let currencySum = document.getElementById("currencyConverter").value.toLowerCase();
    result7.innerHTML = currencyConverter(currencySum);
}

//task 8
const result8 = document.getElementById("Task8");
function passGenerator(passLength=8){
    passLength = passLength || 8;
    let password = '';
    for (let i = 0; i < passLength; i++) password += Math.floor(Math.random() * 10);

    return password;
}

function output8(){
    let passLength = document.getElementById("passGenerator").value;
    result8.innerHTML = passGenerator(passLength);
}

//task 9
const result9 = document.getElementById("Task9");
function removeLetter(letter, text){
    return text.split('').filter((el) => el != letter).join('');
}

function output9(){
    let text = document.getElementById("removeLetterText").value.toLowerCase();
    let letter = document.getElementById("removeLetter").value.toLowerCase();
    result9.innerHTML = removeLetter(letter, text);
}

//task 10
const result10 = document.getElementById("Task10");
function palindrom(word){
    let interval = Math.floor(word.length/2);
    for (let i = 0; i < interval; i++) {
        let first = i++;
        let last = word.length - i;
        if (word[first] == word[last]) {
            return true;
        } else {
            return false;
        }
       
    }
}

function output10(){
    let word = document.getElementById("palindrom").value.toLowerCase();
    result10.innerHTML = palindrom(word);
}

//task 11
const result11 = document.getElementById("Task11");
function removeDuplicates(text){
    let count = 0;
    
    for (let i = 0; i < text.length; i++) {
        
        text.split('').forEach((el) => el == text[i] ? count++ : count);
        if (count > 0) {
            return text.split('').filter((el) => el != text[i]).join(''); 
        } else {
            return text;
            
        }
        
    }
    
}

function output11(){
    let text = document.getElementById("removeDuplicates").value.toLowerCase();
    result11.innerHTML = removeDuplicates(text);
}