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

function* newFontGenerator(i) {
    let result = yield i;
    
    while (true) {
        if (result == 'up') {
            result = yield i += 2;
        } else if (result == 'down') {
            result = yield i -= 2;
        } else {
            result = yield i;
        }
    }
}

const fontGenerator = newFontGenerator(14);

const buttonUp = document.querySelector('#up');
const buttonDown = document.querySelector('#down');
const text = document.getElementById('text');

