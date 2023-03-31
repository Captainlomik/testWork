const inputEl = document.querySelector("input");
const buttonEl = document.querySelector("button");
const timerEl = document.querySelector("span");

const createTimerAnimator = () => {
  let hour;
  let min;
  let sec;
  let timer1;

  return (seconds) => {
    timerEl.textContent = `${Math.trunc(seconds / 3600)
      .toString().padStart(2, 0)}:${Math.trunc((seconds % 3600) / 60)
      .toString().padStart(2, 0)}:${(seconds % 60).toString().padStart(2, 0)}`;

    timer1 = setTimeout(function tick() {
      hour = Math.trunc(seconds / 3600);
      min = Math.trunc((seconds % 3600) / 60);
      sec = seconds % 60;

      if (seconds < 0) clearTimeout(timer1);
      else {
        let output = `${hour.toString().padStart(2, 0)}:${min
          .toString().padStart(2, 0)}:${sec.toString().padStart(2, 0)}`;
        timerEl.textContent = output;
        timer1 = setTimeout(tick, 1000);
      }
      seconds--;
    }, 1000);
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener("input", () => {
  inputEl.value = inputEl.value.replace(/[^0-9]/g, "");
});

buttonEl.addEventListener("click", () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = "";
});
