function startTimer() {
  let timeLeft = 3;
  const timerElement = document.getElementById("timer");
  const interval = setInterval(() => {
    timeLeft--;
    timerElement.textContent = timeLeft;
    if (timeLeft <= 0) clearInterval(interval);
  }, 1000);
}
