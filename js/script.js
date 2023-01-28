const grid = {
  gridInputRange: document.getElementById("grid-size"),
  currentColorFunction: changeToColorPicker,
  colorPicker: "black",
};

function generateGrid() {
  replaceSketchArea();
  createDivs();
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
      let innerDiv = createInnerDiv();
      newDiv.append(innerDiv);
    }
    sketchArea.append(newDiv);
  }
}

function createInnerDiv() {
  const innerDiv = document.createElement("div");
    innerDiv.addEventListener("mouseover", (event) => {
      event.target.style.backgroundColor = grid.currentColorFunction()
    })
  return innerDiv;
}

function addCleanEventToButton() {
  const cleanButton = document.querySelector("#eraser");
  cleanButton.addEventListener("click", () => {
    replaceSketchArea()
    createDivs(grid.gridInputRange.value);
  });
}

function toggleRainbow() {
  if (this.classList.length === 2) {
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


