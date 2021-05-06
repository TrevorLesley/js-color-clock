const $clock = document.querySelector('.clock');
const $display = document.querySelector('.clock-display');
const $progressBar = document.querySelector('.$progressBar');

// The above is setting values to target div elements by classes.

let isHovering = false;

$clock.addEventListener('mouseover', function () {
    isHovering = true;
});

$clock.addEventListener('mouseout', function () {
    isHovering = false;
});

// Above is setting the hover function on the clock to operate properly. Has to be set up to be false by default.

/////////////////////////////////////////////////

function setDate() {
    const now = new Date();
    let hour, minutes, seconds;
    if (isHovering) {
        hour = ('0' + now.getHours().toString(16)).slice(-2);
        hour = ('0' + now.getHours().toString(16)).slice(-2);
        minutes = ('0' + now.getMinutes().toString(16)).slice(-2);
    } else {
        seconds = ('0' + now.getSeconds()).slice(-2);
        hour = ('0' + now.getHours()).slice(-2);
        minutes = ('0' + now.getMinutes()).slice(-2);
    }

    let displayTime = `${hour}:${minutes}:${seconds}`;
    $display.innerHTML = displayTime;

    console.log(seconds / 60);
    $progressBar.style.width = `${seconds / 60 * 14}rem`;



}
setInterval(setDate, 1000);
setDate();

// This Function sets the clock display for both the time when not hovering over the clock, and 
// to display the hexcode when you *are* hovering the clock.