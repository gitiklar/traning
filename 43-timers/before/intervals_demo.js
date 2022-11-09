(() => {
  const startIntervalDemo = document.querySelector("#start-interval-demo");
  const cancelIntervalDemo = document.querySelector("#cancel-interval-demo");
  const result2 = document.querySelector("#result2");

  const texts = ["Wait for it...", "Hi!", "bye", ""];

  let num = 0;
  const tick = () => {
    result2.textContent = texts[num % texts.length];
    num++;
  };

  let idTimeout;

  startIntervalDemo.addEventListener("click", () => {
    idTimeout && clearInterval(idTimeout);

    idTimeout = setInterval(tick, 1000);
  });

  cancelIntervalDemo.addEventListener("click", () => {
    clearInterval(idTimeout);
  });
})();
