function startTimer(duration, display) {
var timer = duration, minutes, seconds;
let i = 0;
var interval = setInterval(function () {
    ++i
    minutes = parseInt(timer / 60, 10)
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;
    if (--timer < 0) {
        timer = duration;
    }
    if (i > duration) {
        clearInterval(interval);
        document.location.replace('/destination');
    }
}, 1000);
}

window.onload = function () {
    const display = document.querySelector('#countdown');
    const duration = display.className
    startTimer(duration, display);
};