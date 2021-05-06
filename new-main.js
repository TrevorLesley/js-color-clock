const $clock = document.querySelector('.clock');
const $clockDisplay = document.querySelector('.clock-display');
const $clockProgressBar = document.querySelector('.clock-progress-bar');

let isHovering = false;

$clock.addEventListener('mouseover', function () {
    isHovering = true;
});

$clock.addEventListener('mouseout', function () {
    isHovering = false;
});



