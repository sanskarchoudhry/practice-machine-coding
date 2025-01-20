let startButton = document.querySelector(".start-btn");
let pauseButton = document.querySelector(".pause-btn");
let stopButton = document.querySelector(".stop-btn");
let resetButton = document.querySelector(".reset-btn");
let watchFace = document.querySelector(".watch-face");

let timer = null;
let elapsedTime = 0;
let isRunning = false;

function formatTime(ms) {
  const totalSeconds = Math.floor(ms / 1000);
  const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
  const seconds = String(totalSeconds % 60).padStart(2, "0");
  return `${minutes}:${seconds}`;
}

function updateDisplay() {
  watchFace.textContent = formatTime(elapsedTime);
}

startButton.addEventListener("click", () => {
  if (isRunning) return;
  isRunning = true;
  timer = setInterval(() => {
    elapsedTime += 1000;
    updateDisplay();
  }, 1000);
});

pauseButton.addEventListener("click", () => {
  if (!isRunning) return;
  isRunning = false;
  clearInterval(timer);
});

stopButton.addEventListener("click", () => {
  isRunning = false;
  clearInterval(timer);
  elapsedTime = 0;
  updateDisplay();
});

resetButton.addEventListener("click", () => {
  if (isRunning) {
    clearInterval(timer);
    isRunning = false;
  }
  elapsedTime = 0;
  updateDisplay();
});

updateDisplay();
