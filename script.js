const container = document.querySelector(".container");
const button = document.querySelector("button");
let gridValue;

function getValue() {
  gridValue = prompt("How big is your penis?");
  document.querySelector(".container").innerHTML = "";
  for(let j = 0; j < gridValue; j++) {
    const row = document.createElement("div");
    container.appendChild(row);
    for(let i = 0; i < gridValue; i++) {
      const square = document.createElement("div");
      square.style.border = "1px solid gray";
      row.appendChild(square);
      square.addEventListener("mouseenter", function() {
        square.classList.add("colored");
      });
    }
  }
}

button.addEventListener("click", getValue);

for(let j = 0; j < 4; j++) {
  const row = document.createElement("div");
  container.appendChild(row);
  for(let i = 0; i < 4; i++) {
    const square = document.createElement("div");
    square.style.border = "1px solid gray";
    row.appendChild(square);
    square.addEventListener("mouseenter", function() {
      square.classList.add("colored");
    });
  }
}
