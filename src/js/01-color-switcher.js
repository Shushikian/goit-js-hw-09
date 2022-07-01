const btnStart = document.querySelector(`[data-start]`);
const btnStop = document.querySelector('[data-stop]');
const body = document.querySelector('body');

let timerId = null;
btnStop.disabled = true;
btnStart.disabled = false;

function start() {
    btnStart.disabled = true;
    btnStop.disabled = false;
    timerId = setInterval(() => { 
        body.style.backgroundColor = getRandomHexColor();
    }, 1000)
}

function stop() {
    clearInterval(timerId);
    btnStart.disabled = false;
    btnStop.disabled = true;
}

btnStart.addEventListener("click", start);
btnStop.addEventListener("click", stop);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}