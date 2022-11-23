addCleanEventToButton();
addCreateEventToButton();

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
  const cleanButton = document.querySelector("#clean");
  const inputNumber = getUserGridSize();
  cleanButton.addEventListener("click", () => {
    replaceSketchArea()
    createDivs(getUserGridSize());
  });
  createDivs(inputNumber);
}

function addCreateEventToButton() {
  const createButton = document.querySelector("#create");
  createButton.addEventListener("click", () => {
    replaceSketchArea();
    createDivs(getUserGridSize());
  })
}

function getUserGridSize() {
  return document.querySelector("input").value
}