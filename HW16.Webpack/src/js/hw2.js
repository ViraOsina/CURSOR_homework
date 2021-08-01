function firstInput() {
    let firstInput = +prompt('Введіть ціле число від якого будемо рахувати суму');

    while (firstInput == NaN || !Number.isInteger(firstInput)) {
        firstInput = +prompt('Можна ввести ЛИШЕ ціле число');
    }

    return firstInput;
}



export { firstInput };