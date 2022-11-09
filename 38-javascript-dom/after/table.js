let res = "";
for (i = 1; i < 10; i++) {
  res += "<tr>";
  for (j = 1; j < 10; j++) {
    res += `<td>${i * j}</td>`;
  }
  res += "</tr>";
}
const tbody = document.querySelector("tbody");
tbody.innerHTML = res;
