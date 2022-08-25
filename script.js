const grid = document.querySelector("#grid");

function generateRandomColor() {
  let maxVal = 0xffffff; // 16777215
  let randomNumber = Math.random() * maxVal;
  randomNumber = Math.floor(randomNumber);
  randomNumber = randomNumber.toString(16);
  let randColor = randomNumber.padStart(6, 0);
  return `#${randColor.toUpperCase()}`;
}

function generateGrid() {
  for (let i = 0; i < 256; i++) {
    const gridElement = document.createElement("div");
    gridElement.style.width = "25px";
    gridElement.style.height = "25px";
    gridElement.classList.add("grid-element");
    grid.appendChild(gridElement);
  }
}

function addGlobalEventListener(type, selector, callback) {
  document.addEventListener(type, (e) => {
    if (e.target.matches(selector)) callback(e);
  });
}

generateGrid();
addGlobalEventListener("mouseover", ".grid-element", (e) => {
  e.target.style.background = generateRandomColor();
});
