const inputs = document.querySelectorAll("input");
const container = document.querySelector("div");

function writeToAllInputs(text) {
  for (let inp of inputs) {
    inp.value = text;
  }
}

container.addEventListener("input", (e) => writeToAllInputs(e.target.value));
