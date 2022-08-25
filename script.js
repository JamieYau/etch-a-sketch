let gridSize = 16;
const grid = document.querySelector("#grid");
let gridDim = document.getElementById("grid").clientWidth;

const sliderValue = document.querySelectorAll("span");
const inputSlider = document.querySelector("input");

function resetGrid() {
  const gridElements = document.querySelectorAll(".grid-element");
  gridElements.forEach((gridElement) => {
    gridElement.remove();
  });
}

//Adjust slider value text
inputSlider.oninput = () => {
  gridSize = inputSlider.value;
  sliderValue[0].textContent = gridSize;
  sliderValue[1].textContent = gridSize;
  //reset grid
  resetGrid();
  generateGrid();
};

function generateRandomColor() {
  let maxVal = 0xffffff; // 16777215
  let randomNumber = Math.random() * maxVal;
  randomNumber = Math.floor(randomNumber);
  randomNumber = randomNumber.toString(16);
  let randColor = randomNumber.padStart(6, 0);
  return `#${randColor.toUpperCase()}`;
}

function generateGrid() {
  for (let i = 0; i < gridSize ** 2; i++) {
    const gridElement = document.createElement("div");
    gridElement.style.width = gridDim / gridSize + "px";
    gridElement.style.height = gridDim / gridSize + "px";
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
