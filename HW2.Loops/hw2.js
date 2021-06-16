let sum = null;
let firstInput = +prompt('Введіть ціле число від якого будемо рахувати суму');

while (firstInput == NaN || !Number.isInteger(firstInput)) {
    firstInput = +prompt('Можна ввести ЛИШЕ ціле число');
}

let secondInput = +prompt('Введіть ціле число до якого будемо рахувати суму');

while (secondInput == NaN || !Number.isInteger(secondInput)) {
    secondInput = +prompt('Можна ввести ЛИШЕ ціле число');
}

const noEven = confirm('Пропускати парні числа?');
const intervalStart = Math.min(firstInput, secondInput);
const intervalEnd = Math.max(firstInput, secondInput);

for (let i = intervalStart; i<=intervalEnd; i++){  
    if (noEven && intervalStart % 2 === 0){
        continue
    }    
    sum = intervalStart + sum;
}

document.writeln(`Сума = ${sum}`);