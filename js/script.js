const grid = {
  gridSize: 32,
  gridInputRange: document.getElementById("grid-size"),
  currentColor: "black",
  currentColorFunction: changeToBlackColor,
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
      grid.currentColor = grid.currentColorFunction()
      event.target.style.backgroundColor = grid.currentColor
    })
  return innerDiv;
}

function addCleanEventToButton() {
  const cleanButton = document.querySelector("#eraser");
  cleanButton.addEventListener("click", () => {
    replaceSketchArea()
    createDivs(grid.gridSize);
  });
}

function displayGridValue() {
  const gridDisplay = document.querySelector(".grid-size-display");
  gridDisplay.innerText = grid.gridSize.toString() + "x" + grid.gridSize.toString();
}

function toggleRainbow() {
  if (this.classList.length === 2) {
    this.classList.remove("active")
    grid.currentColorFunction = changeToBlackColor;
  } else {
    this.classList.add("active")
    grid.currentColorFunction = randomColor;
  }
}

function changeToBlackColor() {
  return "black";
}

function randomColor() {
  let number = (Math.floor(Math.random() * 16777214)).toString(16);
  return "#" + number;
}


