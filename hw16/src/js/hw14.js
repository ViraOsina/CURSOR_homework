function* createIdGenerator() {
    let i = 1;

    while (true) {
        yield i++;
    }
}

export const newNumberGenerator = createIdGenerator();


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



function changeFontOnKeyDown (e) {
    if (e.key === 'ArrowUp') {
        enlargeTextSize();
    } else if (e.key === 'ArrowDown') {
        reduceTextSize();
    }else { return; }      
}


export { createIdGenerator };
