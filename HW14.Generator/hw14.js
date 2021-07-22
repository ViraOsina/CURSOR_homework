function* createIdGenerator() {
    let i = 1;

    while (true) {
        yield i++;
    }
}

const newNumberGenerator = createIdGenerator();
const output = document.querySelector('#output')

document.querySelector('#generate').addEventListener("click",  () => {
    output.innerHTML = newNumberGenerator.next().value;
})

function* newFontGenerator(fontSize) {
    let result = yield fontSize;
    
    while (true) {
        if (result == 'up') {
            result = yield fontSize += 2;
        } else if (result == 'down') {
            result = yield fontSize -= 2;
        } else {
            result = yield fontSize;
        }
    }
}

const fontGenerator = newFontGenerator(14);

const buttonUp = document.querySelector('#up');
const buttonDown = document.querySelector('#down');
const text = document.getElementById('text');

function reduceTextSize () {
    let fontSize = fontGenerator.next().value;

    if (fontSize > 14) {
        fontSize = fontGenerator.next('down').value;
		text.style.fontSize = `${fontSize}px`;
    } 
        text.style.fontSize = `${fontSize}px`;
}

function enlargeTextSize () {
    let fontSize = fontGenerator.next().value;

    if (fontSize < 100) {
        fontSize = fontGenerator.next('up').value;
		text.style.fontSize = `${fontSize}px`;
    } 
        text.style.fontSize = `${fontSize}px`;
}


buttonUp.addEventListener('click', enlargeTextSize);
buttonDown.addEventListener('click', reduceTextSize);

function changeFontOnKeyDown (e) {
    if (e.key === 'ArrowUp') {
        enlargeTextSize();
    } else if (e.key === 'ArrowDown') {
        reduceTextSize();
    }else { return; }      
}

document.addEventListener('keydown', changeFontOnKeyDown);
