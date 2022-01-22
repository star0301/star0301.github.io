const timer = document.querySelector(".clock");

function setTimer() {
  const date = new Date();
  timer.innerText = `${String(date.getHours()).padStart("2", 0)}:${String(
    date.getMinutes()
  ).padStart("2", 0)}:${String(date.getSeconds()).padStart("2", 0)}`;
}

setTimer();
setInterval(setTimer, 1000);
