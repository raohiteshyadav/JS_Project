let startButton = document.getElementById('start');
let stopButton = document.getElementById('stop');
let resetButton = document.getElementById('reset');
let display = document.getElementById('display');
let timer;
let lapbutton=document.getElementById('lap')

let isRunning = false;
let seconds = 0;
let minutes = 0;
let milliseconds = 0;
let count=1;

function lapStopwatch(){
    let idl=document.getElementById(`lap${count}`);
    console.log(idl);
    if(count===6)
    {
        window.alert("No more laps can be added");
    }
    else
    {
        idl.innerHTML=`Lap${count}::${display.innerText}`;
    }
    count++;
}

function startStopwatch() {
    if (!isRunning) {
        isRunning = true;
        startButton.innerText = "Pause";
        stopButton.disabled = false;
        startTimer();
    } else {
        isRunning = false;
        stopStopwatch();
        startButton.disabled=false;
        
    }
}

function stopStopwatch() {
    clearInterval(timer);
    isRunning = false;
    startButton.innerText = "Resume";
    startButton.disabled=true;
    stopButton.disabled = true;
}

function resetStopwatch() {
    clearInterval(timer);
    isRunning = false;
    startButton.innerText = "Start";
    stopButton.disabled = true;
    startButton.disabled=false;
    seconds = 0;
    minutes = 0;
    milliseconds = 0;
    display.innerText = formatTime();
    
    for(let rs=1;rs<6;rs++)
        {
            let idl2=document.getElementById(`lap${rs}`); 
            idl2.innerHTML="";
        } 
        window.alert("Laps removed");
}


function startTimer() {
    timer = setInterval(function() {
        milliseconds++;
        if (milliseconds >= 100) {
            milliseconds = 0;
            seconds++;
        }
        if (seconds >= 60) {
            seconds = 0;
            minutes++;
        }
        display.innerText = formatTime();
    }, 10);
}

function formatTime() {
    let formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    let formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
    let formattedMilliseconds = milliseconds < 10 ? `0${milliseconds}` : milliseconds;
    return `${formattedMinutes}:${formattedSeconds}:${formattedMilliseconds}`;
}

startButton.addEventListener('click', startStopwatch);
stopButton.addEventListener('click', stopStopwatch);
resetButton.addEventListener('click', resetStopwatch);
lapbutton.addEventListener('click', lapStopwatch);