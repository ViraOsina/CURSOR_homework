//The Unicode encoding is a hexadecimal number, and the corresponding range of Chinese characters 
//is 4E00-9FA5, and the conversion to a decimal number is 19968-40869.

//converting Date.now() to Chinese range

function chineseChar() {
    const minNumber = 19968;
    const maxNumber = 40869;
    let dateDigits = +String(Date.now()).slice(-5);
    if (dateDigits > maxNumber || dateDigits < minNumber) {
        dateDigits = Math.floor(Math.random() * (maxNumber - minNumber) + minNumber);
    }
    return String.fromCharCode(dateDigits + '');
}

//async function

async function getRandomChinese() {
    const length = 5;
    let result = '';

    for (let i = 0; i < length; i++) {
        const promise = new Promise((resolve) => {
          setTimeout(() => {
                resolve(chineseChar());
          }, 50 * length);
        });
        result += await promise; 
    }
    
    document.getElementById("hw11").innerHTML = result;
    console.log( 'awaiting time is', 50*length);
}


export { getRandomChinese };