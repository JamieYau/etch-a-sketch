let gridSize = 16;
let color = "black";

function resetGrid() {
  const gridElements = document.querySelectorAll(".grid-element");
  gridElements.forEach((gridElement) => {
    gridElement.remove();
  });
}

function generateGrid() {
  resetGrid();
  const grid = document.querySelector("#grid");
  const gridDim = document.getElementById("grid").clientWidth;
  for (let i = 0; i < gridSize ** 2; i++) {
    const gridElement = document.createElement("div");
    gridElement.addEventListener("mouseover", colorSquare);

    gridElement.style.width = gridDim / gridSize + "px";
    gridElement.style.height = gridDim / gridSize + "px";
    gridElement.classList.add("grid-element");

    grid.appendChild(gridElement);
  }
}

function changeSize() {
  const sliderValue = document.querySelectorAll("span");
  const inputSlider = document.querySelector("input");
  //Adjust slider value text
  inputSlider.oninput = () => {
    gridSize = inputSlider.value;
    sliderValue[0].textContent = gridSize;
    sliderValue[1].textContent = gridSize;
    //reset grid
    generateGrid();
  };
}

function generateRandomColor() {
  let maxVal = 0xffffff; // 16777215
  let randomNumber = Math.random() * maxVal;
  randomNumber = Math.floor(randomNumber);
  randomNumber = randomNumber.toString(16);
  let randColor = randomNumber.padStart(6, 0);
  return `#${randColor.toUpperCase()}`;
}

function colorSquare() {
  if (color === "random") {
    this.style.backgroundColor = generateRandomColor();
  } else this.style.background = color;
}

function changeColor(choice) {
  color = choice;
}

//////////////////////////////////////////////////code//////////////////////////////////////////////

generateGrid();
changeSize();
