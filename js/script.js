let gridSize = 32;
let currentPosition;


randomColor()
diplayGridValue()
addCleanEventToButton();
addCreateEventToButton();
addBombEventToButton();
moveBall();
addSwitchButtonTuRainbow()

function createDivs(number) {
  const rainbowReference = document.getElementById("rainbow");
  let rainBowIsActive = rainbowReference.classList.contains("active");
  const sketchArea = document.querySelector("#sketch-area");

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
  const sketchArea = document.querySelector("#sketch-area");
  const newSketchArea = document.createElement("div");
  newSketchArea.id = "sketch-area";
  sketchArea.parentElement.replaceChild(newSketchArea,sketchArea);
}

function addCleanEventToButton() {
  const cleanButton = document.querySelector("#eraser");
  cleanButton.addEventListener("click", () => {
    replaceSketchArea()
    createDivs(gridSize);
  });
}

function addCreateEventToButton() {
  const createButton = document.querySelector("#new");
  createButton.addEventListener("click", () => {
    replaceSketchArea();
    createDivs(gridSize);
  })
}

function addBombEventToButton() {
  const createButton = document.querySelector("#bomb");
  createButton.addEventListener("click", replaceSketchArea);
}

function moveBall() {
  const ball = document.getElementById("ball");
  ball.addEventListener("mousedown", (event) => {
    currentPosition = event.clientX;
    ball.addEventListener("mousemove", changeBallPosition)
    window.addEventListener("mouseup", () => {
      ball.removeEventListener("mousemove", changeBallPosition)
    })
  })
}

function changeBallPosition(event) {
  let dist = event.clientX - currentPosition;
  currentPosition = event.clientX;
  let barMaxWidth = this.parentElement.getBoundingClientRect().left + this.parentElement.offsetWidth;
  let ballRightPosition = Math.min(this.getBoundingClientRect().left + dist, barMaxWidth);
  let ballLeftPosition = Math.max(ballRightPosition, this.parentElement.getBoundingClientRect().left)
  this.style.left = ballLeftPosition + "px";
  let number = (currentPosition - this.parentElement.getBoundingClientRect().left) / (this.parentElement.offsetWidth / 64)
  gridSize = Math.max(Math.min(Math.round(number), 64), 2);
  diplayGridValue()
}

function diplayGridValue() {
  const textDiv = document.getElementById("grid-size-display");
  textDiv.innerText = gridSize.toString() + "x" + gridSize.toString();
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

