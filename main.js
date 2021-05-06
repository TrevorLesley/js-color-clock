var clockDisplay = document.querySelector('.clock-display');
var clock = document.querySelector('.clock');

var isHovering = false;

function colorClock() {
    var time = new Date();
    var hours = (time.getHours() % 12).toString();
    var minutes = time.getMinutes().toString();
    var seconds = time.getSeconds().toString();

    var hexHour = ('0' + hours.toString(16)).slice(-2);
    var hexMinute = ('0' + minutes.toString(16)).slice(-2);
    var hexSecond = ('0' + seconds.toString(16)).slice(-2);


    if (hours.length < 2) {
        hours = '0' + hours;
    }

    if (minutes.length < 2) {
        minutes = '0' + minutes;
    }

    if (seconds.length < 2) {
        seconds = '0' + seconds;
    }





    if (isHovering) {

        document.querySelector('.clock-display').textContent = '#' + hexHour + hexMinute + hexSecond;

    } else {

        document.querySelector('.clock-display').textContent = hours + ":" + minutes + ":" + seconds;
    }

    $(".clock-face").mouseenter(function (event) {
        isHovering = true;
        console.log('Testing on');
    });

    $(".clock-face").mouseleave(function (event) {
        isHovering = false;
        console.log('Testing off');
    })
};

colorClock();
setInterval(colorClock, 1000);