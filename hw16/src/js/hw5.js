//Створіть функцію getRandomArray(length, min, max) – яка повертає масив випадкових цілих чисел. 
//У функції є параметри: length - довжина масиву, min – мінімальне значення цілого числа, 
//max – максимальне значення цілого числа. 

function getRandomArray(length, min, max) {
    let randomArray = [];

    for (let i = 0; i < length; i++) {
        randomArray = [...randomArray, randomNumber(min, max)];
    }

    return randomArray;
}

function randomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


//Створіть функцію getModa(...numbers) – яка вираховує моду всіх переданих в неї аргументів. 
//НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ

function getModa(...numbers) {
    let modes = [];
    let count = [];
    let maxIndex = 0;
    const integerNumbers = numbers.filter(el => Number.isInteger(el));

    for (i = 0; i < integerNumbers.length; i++) {
        let number = integerNumbers[i];
        count[number] = (count[number] || 0) + 1;
        
        if (count[number] > maxIndex) {
            maxIndex = count[number];
        }
    }

    for (let i in count) {
        if (count.hasOwnProperty(i) && count[i] === maxIndex) {
            modes.push(Number(i));
        }
    }

    return +modes;
}

//Створіть функцію getAverage(...numbers) – яка рахує середнє арифметичне всіх переданих в неї аргументів. 
//НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
export function getAverage(...numbers) {
    let total = 0;
    const integerNumbers = numbers.filter(el => Number.isInteger(el));

    for (let i = 0; i < integerNumbers.length; i += 1) {
            total += integerNumbers[i];
        }

    return total / integerNumbers.length;
}

//Створіть функцію getMedian(...numbers) – яка рахує медіану всіх переданих в неї аргументів. 
//НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
function getMedian(...numbers) {
    let median = 0;
    const integerNumbers = numbers.filter(el => Number.isInteger(el));
    const arrayLength = integerNumbers.length;

    for (let i = 0; i < integerNumbers.length; i++) {
        if (arrayLength % 2 === 0) {
            median = (integerNumbers[arrayLength / 2 - 1] + integerNumbers[arrayLength / 2]) / 2;
            return median;
        } median = integerNumbers[(arrayLength - 1) / 2];
        return median;
    }
}

//Створіть функцію filterEvenNumbers(...numbers) – яка фільтрує парні числа передані як аргументи функції

function filterEvenNumbers(...numbers){
    return numbers.filter(number => number % 2 != 0);
}


//Створіть функцію countPositiveNumbers(...numbers) – яка порахує кількість чисел більших 0
function countPositiveNumbers(...numbers) {
    return numbers.filter(number => number > 0).length;
}


//Створіть функцію getDividedByFive(...numbers) – яка відфільтрує усі елементи в масиві 
//та залишить тільки ті, які діляться на ціло на 5
function getDividedByFive(...numbers) {
    return numbers.filter(number => number % 5 == 0);
}


//Створіть функцію replaceBadWords(string) – яка 1) розіб'є фразу на слова, 
//2) замінить погані слова на зірочки (*).
function replaceBadWords(string, ...newBadWords) {
    const badWords = ['shit', 'fuck', ...newBadWords];
    let words = string.toLowerCase().split(' ');
    //const regExp = new RegExp(badWords, 'gi'); - чомусь через regExp не працює
    let editedText = [];
    words.forEach((word) => { editedText.push(word.replace(/shit|fuck/gi, "***")) });
    return editedText.join(' ');
}


//Створіть функцію divideByThree(word), яка розбиває кожне слово на умовні склади по 3 букви.
function divideByThree(word) {
    let output = word.toLowerCase().replaceAll(' ', '');

    if (output.length > 3) {
        output = [];

        for (let i = 0; i < word.length; i += 3)
            output.push(word.substring(i, i + 3));
    }

    return output;
}


//Створіть функцію generateCombinations(word), 
//яка видасть всі можливі перестановки(унікальні, без повторень) букв в слові.
function generateCombinations(word) {
   if (word.length > 10) {
        return 'the word is too long. Please keep it under 10 letters';
    }
    function permutation(word) {
        const letters = word.split('');
        let combinations = [];

        if (letters.length === 1) return letters;

        for (let i = 0; i < letters.length; i++) {
            const firstLetter = letters[i];
            const restLetters = letters.slice(0, i).concat(letters.slice(i + 1));
            const restLettersCombinations = permutation(restLetters.join(''));

            for (let j = 0; j < restLettersCombinations.length; j++) {
                const combinationArray = [firstLetter].concat(restLettersCombinations[j]);
                let newWord = combinationArray.join('');

                if (combinations.includes(newWord)) continue;
                else combinations.push(newWord);
            }
        }

        return combinations;
    }
    return `${permutation(word)}`;
}



