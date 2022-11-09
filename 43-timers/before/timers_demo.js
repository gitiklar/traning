const startTimeoutDemo = document.querySelector("#start-timeout-demo");
const cancelTimeoutDemo = document.querySelector("#cancel-timeout-demo");
const result1 = document.querySelector("#result1");
const texts = ["Wait for it...", "Hi!", "bye", ""];

let num = 0;
const tick = () => {
  result1.textContent = texts[num % texts.length];
  num++;
};

let idTimeout;

startTimeoutDemo.addEventListener("click", () => {
  idTimeout = setTimeout(tick, 1000);
});

cancelTimeoutDemo.addEventListener("click", () => {
  clearTimeout(idTimeout);
});
