import _ from 'lodash';
import './styles/style.css';
import './styles/hw10.css';
import './styles/hw9.css';
import './styles/hw14.css';
import './styles/hw13.css';


import { maximumItemPrice, priceItem1, priceItem2, priceItem3 } from './js/HW1.js';
import { returnSum } from './js/hw2.js';
import { getMaxDigit } from './js/hw3.js';
import { studentPairs, students } from './js/hw4.js';
import { getAverage } from './js/hw5.js';
import { studentsObj, getStudentsNames } from './js/hw6.js';
import { getTotalTaxes, ukraine } from './js/hw7.js';
import { john } from './js/hw8.js';
import { generateTilesInterval } from './js/hw9.js';
import { playOnClick } from './js/hw10.js';
import { getRandomChinese } from './js/hw11.js';
import { newNumberGenerator } from './js/hw14.js';
import { renderPlanets } from './js/hw13.js';


function output1() {
    const outputHw1 = document.getElementById('hw1');
  
    // Lodash, currently included via a script, is required for this line to work
    
    outputHw1.innerHTML = maximumItemPrice(priceItem1, priceItem2, priceItem3);
}

document.getElementById('task1').addEventListener("click", output1);

function output2() {
    const outputHw2 = document.getElementById('hw2');
    const intervalStart = 1;
    const intervalEnd = 10;
    const noEven = true;
        
    outputHw2.innerHTML = 'Sum of odd numbers from 1 to 10 is ' + returnSum(intervalStart, intervalEnd, noEven);
}

document.getElementById('task2').addEventListener("click", output2);

function output3() {
    const outputHw3 = document.getElementById('hw3');
        
    outputHw3.innerHTML = 'Max digit of 893578511 is ' + getMaxDigit('893578511');
}

document.getElementById('task3').addEventListener("click", output3);

function output4() {
    const outputHw4 = document.getElementById('hw4');
        
    outputHw4.innerHTML = 'Student pairs ' + studentPairs(students);
}

document.getElementById('task4').addEventListener("click", output4);

function output5() {
    const outputHw5 = document.getElementById('hw5');

    outputHw5.innerHTML = 'Average: ' + getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2);
}

document.getElementById('task5').addEventListener("click", output5);

function output6() {
    const outputHw6 = document.getElementById('hw6');
    
    outputHw6.innerHTML = 'Students names: ' + getStudentsNames(studentsObj);
}

document.getElementById('task6').addEventListener("click", output6);

function output7() {
    const outputHw7 = document.getElementById('hw7');

    outputHw7.innerHTML = 'Total taxes in Ukraine: ' + getTotalTaxes (ukraine);
}

document.getElementById('task7').addEventListener("click", output7);

function output8() {
    const outputHw8 = document.getElementById('hw8');

    outputHw8.innerHTML = john.getScholarship();
}

document.getElementById('task8').addEventListener("click", output8);

function output9() {
    const outputHw9 = document.querySelector('.tileBox');
    outputHw9.innerHTML = generateTilesInterval();
}

document.getElementById('task9').addEventListener("click", output9);

function output10() {
    const outputHw10 = document.getElementById('hw10');

    outputHw10.innerHTML = playOnClick();
}

document.getElementById('task10').addEventListener("click", output10);

function output11() {
    getRandomChinese(8);
}

document.getElementById('task11').addEventListener("click", output11);

function output13() {
    renderPlanets(); 
}

document.getElementById('task13').addEventListener("click", output13);

//output14() 
const outputHw14 = document.getElementById('hw14');
document.getElementById('task14').addEventListener("click",  () => {
    outputHw14.innerHTML = newNumberGenerator.next().value;
})



