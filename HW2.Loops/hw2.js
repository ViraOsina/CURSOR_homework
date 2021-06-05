let sum = null;
let firstInput = +prompt('Введіть ціле число від якого будемо рахувати суму');

while (firstInput == NaN || !Number.isInteger(firstInput)) {
    firstInput = +prompt('Можна ввести ЛИШЕ ціле число');
}

let secondInput = +prompt('Введіть ціле число до якого будемо рахувати суму');

while (secondInput == NaN || !Number.isInteger(secondInput)) {
    secondInput = +prompt('Можна ввести ЛИШЕ ціле число');
}

let noEven = confirm('Пропускати парні числа?');

let N = Math.min(firstInput, secondInput);
let M = Math.max(firstInput, secondInput);



for (N; N<=M; N++){  
    if (noEven && N % 2 === 0){
        continue
    }    
    sum = N + sum;
}

document.writeln(`Сума = ${sum}`);