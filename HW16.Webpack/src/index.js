import _ from 'lodash';
import './styles/style.css';


import { maximumItemPrice } from "./js/HW1.js";
import { firstInput } from "./js/hw2.js";
import { passGenerator } from "./js/hw3.js";
import { studentPairs } from "./js/hw4.js";
import { getAverage } from "../src/js/hw5.js";
import { studentsObj, getBestStudent } from "./js/hw6.js";
import { ukraine, getMyTaxes } from "./js/hw7.js";
import { john } from "./js/hw8.js";
import { generateTilesInterval } from "./js/hw9.js";
import { playOnClick } from "./js/hw10.js";
import { getRandomChinese } from "./js/hw11.js";
import { createIdGenerator } from "./js/hw14.js";

const outputHw1 = document.getElementById('hw1');
const outputHw2 = document.getElementById('hw2');
const outputHw3 = document.getElementById('hw3');
const outputHw4 = document.getElementById('hw4');
const outputHw5 = document.getElementById('hw5');
const outputHw6 = document.getElementById('hw6');
const outputHw7 = document.getElementById('hw7');
const outputHw8 = document.getElementById('hw8');
const outputHw10 = document.getElementById('hw10');
const outputHw11 = document.getElementById('hw11');
const outputHw14 = document.getElementById('hw14');

function output1 () {
    return outputHw1.innerHTML = 'Maximum item price is' + maximumItemPrice;
}

document.getElementById('task1').addEventListener("click", output1);

function output2 () {
    return outputHw2.innerHTML = 'HW2 input ' + firstInput; 
}
    
document.getElementById('task2').addEventListener("click", output2);

function output3 () {
    return outputHw3.innerHTML = 'random password for 5 characters: ' + passGenerator(5); 
}

document.getElementById('task3').addEventListener("click", output3); 

function output4 () {
    const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
    return outputHw4.innerHTML = 'student pairs: ' + studentPairs(students); 
}

document.getElementById('task4').addEventListener("click", output4);   
    
function output5 () {
    const numbers = [4, 5, 6, 10];
    return outputHw5.innerHTML = 'average for' + numbers + ' is ' + getAverage(numbers); 
}

document.getElementById('task5').addEventListener("click", output5); 
    
function output6 () {
    return outputHw6.innerHTML = 'best student is ' + getBestStudent(studentsObj); 
}

document.getElementById('task6').addEventListener("click", output6);    

function output7 () {
    return outputHw7.innerHTML = 'taxes for salaries in Ukraine = ' + getMyTaxes(ukraine); 
}

document.getElementById('task7').addEventListener("click", output7);    

function output8 () {
    return outputHw8.innerHTML = john.getAverageMark(); 
}

document.getElementById('task8').addEventListener("click", output8);    

function output9 () {
    generateTilesInterval(); 
}

document.getElementById('task9').addEventListener("click", output9);     

function output10 () {
    buildKeysHw10 ();
    playOnClick; 
}

document.getElementById('task10').addEventListener("click", output10);   

function output11 () {
    return  outputHw11.innerHTML = getRandomChinese(); 
}

document.getElementById('task11').addEventListener("click", output11);     

document.getElementById('task14').addEventListener("click", drawNumbersGenerator); 

function buildKeysHw10 () {
    outputHw10.innerHTML = `<div class="keys">
        <div data-key="81" class="key">
        <kbd>Q</kbd>
        <span class="sound">bird chirp</span>
        </div>
        <div data-key="87" class="key">
        <kbd>W</kbd>
        <span class="sound">cat meow</span>
        </div>
        <div data-key="69" class="key">
        <kbd>E</kbd>
        <span class="sound">water</span>
        </div>
        <div data-key="82" class="key">
        <kbd>R</kbd>
        <span class="sound">piano</span>
        </div>
        <div data-key="84" class="key">
        <kbd>T</kbd>
        <span class="sound">rain</span>
        </div>
        <div data-key="89" class="key">
        <kbd>Y</kbd>
        <span class="sound">thunder</span>
        </div>
        
    </div>`
}

function drawNumbersGenerator () {
    outputHw14.innerHTML = `<div class="endless-generator">
            <p>Click to generate a number</p>
            <button id="generate">Click me!</button>
            <div id="output">?</div>
        </div>`
    
    const newNumberGenerator = createIdGenerator();
    const output = document.querySelector('#output')

document.querySelector('#generate').addEventListener("click",  () => {
    output.innerHTML = newNumberGenerator.next().value;
})
}


