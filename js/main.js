var intervalId1;
var timerMil = document.getElementById("milliseconds");
var timerSec = document.getElementById("seconds");
var timerMin = document.getElementById("minutes");
var timerHou = document.getElementById("hours");
var timerDay = document.getElementById("days");
var mil = 0;
var sec = 0;
var min = 0;
var hou = 0;
var day = 0;
function start() {
    intervalId1 = setInterval(function () {
        if (mil == 99) {
            if (sec == 59) {
                if (min == 59) {
                    if (hou == 23) {
                        hou = -1;
                        day = addIncrement(day, timerDay);
                        displayDays();
                    }
                    min = -1;
                    hou = addIncrement(hou, timerHou);
                }
                sec = -1;
                min = addIncrement(min, timerMin);
            }
            mil = -1;
            sec = addIncrement(sec, timerSec);
        }
        mil = addIncrement(mil, timerMil);
    }, 10);
};
function addIncrement(x, timerX) {
    x++;
    timerX.innerHTML = n(x);
    return x
};
function n(n) {
    if (n <= 9) {
        n = "0" + n;
    } return n;
};
function stop() {
    clearInterval(intervalId1);
};
function reset() {
    mil = 0;
    sec = 0;
    min = 0;
    hou = 0;
    day = 0;
    timerMil.innerHTML = "00";
    timerSec.innerHTML = "00";
    timerMin.innerHTML = "00";
    timerHou.innerHTML = "00";
    timerDay.innerHTML = "";
    document.getElementById("daysDiv").style.display = "none";
};
function displayDays() {
    let div = document.getElementById("daysDiv");
    div.style.display = "inline-block";
};
function toggleDisplay() {
    let div = document.getElementById("milsDiv");
    var buttonValue = document.getElementById("showmil");
    if (div.style.display == "none") {
        buttonValue.innerHTML = "Hide Milli- Seconds";
        div.style.display = "inline-block";
    } else {
        buttonValue.innerHTML = "Show Milli- Seconds";
        div.style.display = "none";
    }
};
function toggleScreen() {
    var power = document.getElementById("off");
    if (power.style.display == "none") {
        power.style.display = "block";
    } else {
        power.style.display = "none";
}
};