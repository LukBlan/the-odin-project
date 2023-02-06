const grid = {
  gridInputRange: document.getElementById("grid-size"),
  currentColorFunction: changeToColorPicker,
  colorPicker: "black",
};

function generateGrid() {
  replaceSketchArea();
  createDivs();
  ApplyColorOnSketchAreaOnClick()
}

function replaceSketchArea() {
  const sketchArea = document.querySelector(".sketch-area");
  const newSketchArea = document.createElement("div");
  newSketchArea.classList.add("sketch-area");
  sketchArea.parentElement.replaceChild(newSketchArea,sketchArea);
}

function createDivs() {
  const sketchArea = document.querySelector(".sketch-area");
  const gridSize = grid.gridInputRange.value;

  for (let i = 0; i < gridSize; i++) {
    let newDiv = document.createElement("div");
    for (let j = 0; j < gridSize; j++) {
      let innerDiv = document.createElement("div");
      innerDiv.classList.add("inner-div");
      newDiv.append(innerDiv);
    }
    sketchArea.append(newDiv);
  }
}

function ApplyColorOnSketchAreaOnClick() {
  const sketchArea = document.querySelector(".sketch-area");
  sketchArea.addEventListener("mousedown", applyColorOnCells);
  sketchArea.addEventListener("mouseup", removeColorOnCells);
}

function removeColorOnCells() {
  const innersDiv = document.getElementsByClassName("inner-div");
  Array.from(innersDiv).forEach(cell => cell.removeEventListener("mouseover", applyColor))
}

function applyColorOnCells() {
  const innersDiv = document.getElementsByClassName("inner-div");
  Array.from(innersDiv).forEach(cell => cell.addEventListener("mouseover", applyColor))
}

function applyColor(event) {
  event.target.style.backgroundColor = grid.currentColorFunction()
}

function addCleanEventToButton() {
  const cleanButton = document.querySelector(".clean-button");
  cleanButton.addEventListener("click", () => {
    generateGrid();
  });
}

function toggleRainbow() {
  if (this.classList.value.includes("active-button")) {
    this.classList.remove("active-button")
    grid.currentColorFunction = changeToColorPicker;
  } else {
    this.classList.add("active-button")
    grid.currentColorFunction = randomColor;
  }
}

function changeToColorPicker() {
  return grid.colorPicker;
}

function randomColor() {
  let number = (Math.floor(Math.random() * 16777214)).toString(16);
  return "#" + number;
}