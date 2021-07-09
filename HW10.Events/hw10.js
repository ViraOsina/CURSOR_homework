const keys = document.querySelectorAll('.key');
const audio = document.querySelectorAll('audio');

function startPlaying(e) {
    stopPlaying();
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    audio.forEach((item) => {
        if (item.getAttribute("data-key") == e.keyCode) {
          item.play();
          key.classList.add("playing");
        } 
    });
}

function stopPlaying() {
    audio.forEach((item) => {
        item.pause();
        item.currentTime = 0;
    });
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}

keys.forEach(key => key.addEventListener("transitionend", removeTransition));

document.addEventListener("keydown", startPlaying);

