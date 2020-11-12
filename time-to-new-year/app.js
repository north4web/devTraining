

const countDown = setInterval(function() {

    const newYearDate = new Date("1 jan 2021");
    const currentDate = new Date();
    const timeLeft = (newYearDate - currentDate)/1000;


    let secs = Math.floor(timeLeft % 60);
    let mins = Math.floor((timeLeft/60) % 60);
    let hours = Math.floor((timeLeft/60/60) % 24);
    let days = Math.floor((timeLeft/60/60) / 24);


    let displayDays = document.getElementById("days");
        displayDays.innerHTML = days;
    let displayHours = document.getElementById("hours");
        displayHours.innerHTML = hours;
    let displayMinutes = document.getElementById("mins");
        displayMinutes.innerHTML = mins;
    let displaySecs = document.getElementById("secs");   
        displaySecs.innerHTML = secs;  
        

    if (timeLeft < 0) {
            // clearInterval(myfunc)
            document.getElementById("days").innerHTML = "0";
            document.getElementById("hours").innerHTML = "0"; 
            document.getElementById("mins").innerHTML = "0";
            document.getElementById("secs").innerHTML = "0";
            document.getElementById("end").innerHTML = "HAPPY 2021 !!!";
            document.getElementById("end").style.color = "red";
        }

}, 1000);

