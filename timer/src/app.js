var currentTime;
var saveTime;
var resumeTime;

var pauseResume = document.querySelector(".pause-resume");


function displayTimer(timer,display) {
    var minutes, seconds;
    var input = document.querySelector("#minuteInput");
    
    input.disabled=true;
    pauseResume.style.visibility='visible';
            
    
  currentTime= setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        console.log(minutes,seconds)

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            display.textContent = "Timeover";
            input.value="0";
            input.disabled=false;
        }

      
        if(timer!=0){
            resumeTime=timer;
        }
    }, 1000);

    
}

function startTimer() {
    var minutesTime=document.querySelector("#minuteInput").value * 60 ;

    display = document.querySelector('#displayTime');
    displayTimer(minutesTime,display);
};

function resetTimer(){
    document.querySelector("#minuteInput").value="";
    clearInterval(currentTime);
    display.textContent = "";
    document.querySelector("#minuteInput").disabled=false;
    pauseResume.style.visibility='hidden';


}

function pauseTimer(){
    saveTime=currentTime;
    clearInterval(currentTime);   
}

function resumeTimer(){
    display = document.querySelector('#displayTime');
    setInterval(displayTimer(resumeTime,display));
}







