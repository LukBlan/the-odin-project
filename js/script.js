let gridSize = 32;
let currentPosition;

addCleanEventToButton();
addCreateEventToButton();
addBombEventToButton();
moveBall()

function createDivs(number) {
  if (number > 0 && number <= 100) {
    const sketchArea = document.querySelector("#sketch-area");
    for (let i = 0; i < number; i++) {
      let newDiv = document.createElement("div");
      newDiv.classList.add("newDiv");
      for (let j = 0; j < number; j++) {
        let innerDiv = document.createElement("div");
        innerDiv.classList.add("innerDiv");
        innerDiv.addEventListener("mouseover", () => {
          innerDiv.style.backgroundColor = "black";
        })
        newDiv.append(innerDiv);
      }
      sketchArea.append(newDiv);
    }
  } else {
    alert("You need to input a Positive Number less or equals to 100");
  }

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
    createDivs(getUserGridSize());
  });
}

function addCreateEventToButton() {
  const createButton = document.querySelector("#new");
  createButton.addEventListener("click", () => {
    replaceSketchArea();
    createDivs(getUserGridSize());
  })
}

function addBombEventToButton() {
  const createButton = document.querySelector("#bomb");
  createButton.addEventListener("click", replaceSketchArea);
}

function getUserGridSize() {
  return document.querySelector("input").value
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
}