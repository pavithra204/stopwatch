let seconds = 0;
let minutes = 0;
let hours = 0;
let timer = null;

function start() {
  if (timer !== null) return;

  timer = setInterval(() => {
    seconds++;

    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }

    if (minutes === 60) {
      minutes = 0;
      hours++;
    }

    document.getElementById("display").innerText =
      format(hours) + ":" + format(minutes) + ":" + format(seconds);
  }, 1000);
}

function stop() {
  clearInterval(timer);
  timer = null;
}

function reset() {
  stop();
  seconds = 0;
  minutes = 0;
  hours = 0;
  document.getElementById("display").innerText = "00:00:00";
}

function format(value) {
  return value < 10 ? "0" + value : value;
}
