import { useState } from "react";

function StopWatch() {
  const [timerInt, setTimerInt] = useState({});

  const timerFunc = () => {
    const timer = document.getElementById("timer");
    const timerAr = timer.innerHTML.split(":");
    let timeHour = parseInt(timerAr[0]);
    let timeMinute = parseInt(timerAr[1]);
    let timeSec = parseInt(timerAr[2]);
    timeSec += 1;
    if (timeSec >= 60) {
      timeSec = 0;
      timeMinute += 1;
    }
    if (timeMinute >= 60) {
      timeMinute = 0;
      timeHour += 1;
    }

    const stringSec = timeSec.toString().padStart(2, "0");
    const stringMin = timeMinute.toString().padStart(2, "0");
    const stringHour = timeHour.toString().padStart(2, "0");
    timer.innerHTML = stringHour + ":" + stringMin + ":" + stringSec;
  };

  const startSession = () => {
    const startButton = document.getElementById("startButton");
    const stopButton = document.getElementById("stopButton");
    const classes = document.getElementsByClassName("formInput");

    for (let el of classes) {
      el.readOnly = false;
    }

    stopButton.disabled = false;
    startButton.disabled = true;
    const set = setInterval(timerFunc, 1000);
    setTimerInt(set);
  };

  const stopSession = () => {
    const startButton = document.getElementById("startButton");
    const stopButton = document.getElementById("stopButton");
    const classes = document.getElementsByClassName("formInput");
    for (let el of classes) {
      el.readOnly = true;
    }

    stopButton.disabled = true;
    startButton.disabled = false;
    clearInterval(timerInt);
  };

  return (
    <div className="flex" id="watch">
      <div className="insideBackground flex">
        <div className="buttonDiv">
          <input
            type="button"
            id="startButton"
            onClick={startSession}
            value="START"
          />
          <input
            type="button"
            id="stopButton"
            onClick={stopSession}
            value="STOP"
          />
        </div>

        <h1 id="timer">00:00:00</h1>
      </div>
    </div>
  );
}

export default StopWatch;
