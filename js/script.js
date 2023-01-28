let grid = {
  gridSize: 32,
  gridInputRange: document.getElementById("grid-size"),
};

function createDivs(number) {
  const rainbowReference = document.getElementById("rainbow");
  let rainBowIsActive = rainbowReference.classList.contains("active");
  const sketchArea = document.querySelector(".sketch-area");

  for (let i = 0; i < number; i++) {
    let newDiv = document.createElement("div");
    newDiv.classList.add("newDiv");
    for (let j = 0; j < number; j++) {
      let innerDiv = createInnerDiv(rainBowIsActive);
      newDiv.append(innerDiv);
    }
    sketchArea.append(newDiv);
  }
}

function createInnerDiv(rainBowIsActive) {
  const innerDiv = document.createElement("div");
  innerDiv.classList.add("innerDiv");
  if (rainBowIsActive) {
    addRandomColorEventToElement(innerDiv, randomColor());
  } else {
    innerDiv.addEventListener("mouseover", () => {
      innerDiv.style.backgroundColor = "black";
    })
    removeEventColorEventToElement(innerDiv)
  }
  return innerDiv;
}

function replaceSketchArea() {
  const sketchArea = document.querySelector(".sketch-area");
  const newSketchArea = document.createElement("div");
  newSketchArea.classList.add("sketch-area");
  sketchArea.parentElement.replaceChild(newSketchArea,sketchArea);
}

function addCleanEventToButton() {
  const cleanButton = document.querySelector("#eraser");
  cleanButton.addEventListener("click", () => {
    replaceSketchArea()
    createDivs(grid.gridSize);
  });
}



function diplayGridValue() {
  const gridDisplay = document.querySelector(".grid-size-display");
  gridDisplay.innerText = grid.gridSize.toString() + "x" + grid.gridSize.toString();
}

function addSwitchButtonTuRainbow() {
  const rainbowButton = document.getElementById("rainbow");
  rainbowButton.addEventListener("click", switchRainbow)
}

function switchRainbow() {
  if (this.classList.length) {
    this.classList.remove("active")
    removeRandomColorEvent()
    changeColorToBlackToAllElements();
  } else {
    this.classList.add("active")
    addRainbowColorToDiv(this);
  }
}

function addRainbowColorToDiv() {
  const sketchArea = document.querySelector("#sketch-area");
  sketchArea.childNodes.forEach(element => {
    element.childNodes.forEach(innerElement => addRandomColorEventToElement(innerElement, randomColor()))
  })
}

function removeRandomColorEvent() {
  const sketchArea = document.querySelector("#sketch-area");
  sketchArea.childNodes.forEach(element => {
    element.childNodes.forEach(innerElement => innerElement.removeEventListener("mouseover", changeToRandomColor))
  })
}

function addRandomColorEventToElement(element) {
  element.addEventListener("mouseover", changeToRandomColor);
}

function removeEventColorEventToElement(element) {
  element.removeEventListener("mouseover", changeToRandomColor);
}

function changeToRandomColor(event) {
  event.target.style.backgroundColor = randomColor();
}

function changeToBlack(event) {
  event.target.style.backgroundColor = "black";
}

function randomColor() {
  let number = (Math.floor(Math.random() * 16777214)).toString(16);
  return "#" + number;
}

function changeColorToBlackToAllElements() {
  const sketchArea = document.querySelector("#sketch-area");
  sketchArea.childNodes.forEach(element => {
    element.childNodes.forEach(innerElement => innerElement.addEventListener("mouseover", changeToBlack))
  })
}

