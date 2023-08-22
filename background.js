const COLOR_CODES = {
  info: {
    color: "green",
  },
  warning: {
    color: "orange",
    threshold: WARNING_THRESHOLD,
  },
  alert: {
    color: "red",
    threshold: ALERT_THRESHOLD,
  },
};

var TIME_LIMIT = 5;
var timePassed = 0;
var timeLeft = TIME_LIMIT;

function onTimesUp() {
  clearInterval(timerInterval);
  if (counter % 1 == 0) {
    //break
    TIME_LIMIT = 3;
    timePassed = 0;
    timeLeft = TIME_LIMIT;
    document.getElementById("start").innerHTML = "BREAK";
    setTimerDisplay();
  } else {
    //study
    TIME_LIMIT = 5;
    timePassed = 0;
    timeLeft = TIME_LIMIT;
    document.getElementById("start").innerHTML = "STUDY";
    setTimerDisplay();
  }
  document.addEventListener("DOMContentLoaded", function () {
    var clickMeButton = document.getElementById("start");

    if (clickMeButton) {
      clickMeButton.addEventListener("click", function () {
        startTimer();
      });
    }
  });
}
