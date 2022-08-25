const grid = document.querySelector("#grid");

function generateRandomColor() {
  let maxVal = 0xffffff; // 16777215
  let randomNumber = Math.random() * maxVal;
  randomNumber = Math.floor(randomNumber);
  randomNumber = randomNumber.toString(16);
  let randColor = randomNumber.padStart(6, 0);
  return `#${randColor.toUpperCase()}`;
}

for (let i = 0; i < 256; i++) {
  const gridElement = document.createElement("div");
  gridElement.style.background = generateRandomColor();
  gridElement.style.width = "25px";
  gridElement.style.height = "25px";
  gridElement.classList.add("grid-element");
  grid.appendChild(gridElement);
}
