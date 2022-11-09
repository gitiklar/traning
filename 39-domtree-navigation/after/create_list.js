const ul = document.querySelector("ul");

const items = [10, 20, 30, 55, 99, 12];

const frag = document.createDocumentFragment();

items.forEach((item) => {
  const li = document.createElement("li");
  li.textContent = item;
  frag.appendChild(li);
});

ul.appendChild(frag);
