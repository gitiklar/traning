const form = document.querySelector("form");

writeDataToForm(JSON.parse(localStorage.getItem("formData")) || {});

function writeDataToForm(data) {
  let inp;
  const names = Object.keys(data);
  for (let name of names) {
    inp = form.querySelector(`[name="${name}"]`);
    inp.value = data[name];
  }
}

function readFormFieldsAsObject() {
  const data = {};
  const inputs = form.querySelectorAll("input,select");
  for (let inp of inputs) {
    data[inp.name] = inp.value;
  }
  return data;
}

form.addEventListener("input", () => {
  localStorage.setItem("formData", JSON.stringify(readFormFieldsAsObject()));
});
