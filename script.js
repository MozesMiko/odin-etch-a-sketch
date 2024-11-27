const container = document.querySelector(".container");
const newGrid = document.querySelector("#newGrid");
const refresh = document.querySelector("#refresh");
let gridValue;

function getValue() {
  gridValue = prompt("How big do you want the new grid?", "Maximum value: 100");
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

function clear() {
  const filled = document.querySelectorAll("div");
  filled.forEach(div => {
    div.classList.remove("colored");
  })
}

newGrid.addEventListener("click", getValue);
refresh.addEventListener("click", clear)

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
