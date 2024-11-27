const container = document.querySelector(".container");
const newGrid = document.querySelector("#new-grid");
const refresh = document.querySelector("#refresh");
let lastValue;
let defaultValue = 4;
let gridValue;

function getValue() {
  let input = prompt("How big do you want the new grid? (Maximum 100)");

  if (input === null) return;

  gridValue = parseInt(input);

  if (isNaN(gridValue) || gridValue <= 0) {
    alert("Invalid input detected. Please enter an integer between 1 and 100!");
    return;
  }

  if(gridValue > 100) {
    alert("Input value exceeds maximum. Grid size was set to 100.")
    gridValue = 100;
  }

  document.querySelector(".container").innerHTML = "";
  for(let j = 0; j < gridValue; j++) {
    const row = document.createElement("div");
    container.appendChild(row);
    for(let i = 0; i < gridValue; i++) {
      const square = document.createElement("div");
      square.style.border = "1px solid rgba(211, 211, 211, 0.7)";
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
    square.style.border = "1px solid rgba(211, 211, 211, 0.7)";
    row.appendChild(square);
    square.addEventListener("mouseenter", function() {
      square.classList.add("colored");
    });
  }
}
