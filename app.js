console.log("Timer");

//DOM API
//timer API - builtin library in the browser

// setTimeout(function () {}, 5000);

var startBtn = document.querySelector('.start-btn');
var pauseBtn = document.querySelector('.pause-btn');
var resetBtn = document.querySelector('.reset-btn');
var display = document.querySelector('.display');
var timerId = null;
var seconds = 0;

var startTimer = function () { 
    seconds++;
    display.textContent  = seconds;
}

var  handleStart = function () {
    if(timerId) {

    } else {
        timerId = setInterval(startTimer, 1000);
    }    
}
var  handlePause = function () {
    clearInterval(timerId);
    timerId = null;
    
}
var  handleReset = function () {
    clearInterval(timerId);
    timerId = null; 
    seconds = 0;
    display.textContent  = 0;
}

startBtn.addEventListener('click',handleStart);
pauseBtn.addEventListener('click',handlePause);
resetBtn.addEventListener('click',handleReset);