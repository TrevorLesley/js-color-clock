const $clock = document.querySelector('.clock');
const $display = document.querySelector('.clock-display');
const $progressBar = document.querySelector('.clock-progress-bar');

let isHovering = false;

$clock.addEventListener('mouseover', function () {
    isHovering = true;
});

$clock.addEventListener('mouseout', function () {
    isHovering = false;
});


function setDate() {
    const now = new Date();
    let hour, minutes, seconds;
    if (isHovering) {
        hour = ('0' + now.getHours().toString(16)).slice(-2);
        minutes = ('0' + now.getMinutes().toString(16)).slice(-2);
        seconds = ('0' + now.getSeconds().toString(16)).slice(-2);
    } else {
        hour = ('0' + now.getHours()).slice(-2);
        minutes = ('0' + now.getMinutes()).slice(-2);
        seconds = ('0' + now.getSeconds()).slice(-2);
    }

    let displayTime = `${hour}:${minutes}:${seconds}`;
    $display.innerHTML = displayTime;

    console.log(seconds / 60);
    $progressBar.getElementsByClassName.width = `${seconds / 60 * 14}rem`;



}
setInterval(setDate, 1000);
setDate();