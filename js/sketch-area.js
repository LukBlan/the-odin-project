(function sketchArea() {
  // Cache DOM
  const sketchArea = document.querySelector(".sketch-area");
  let currenFunctionColor = () => {return "black"};

  // Bind Events
  sketchArea.addEventListener("mousedown", applyColorToCellOnGrid);

  // Subscribe Events
  pubSub.subscribe("newGridSize", render);
  pubSub.subscribe("colorPickerIsActive", setFunctionColor);
  pubSub.subscribe("rainbowColorIsActive", setFunctionColor);
  pubSub.subscribe("bomb", bombSketchArea);

  function bombSketchArea() {
    Array.from(sketchArea.children).forEach(
      div => Array.from(div.children).forEach(
        innerDiv => innerDiv.removeAttribute("style")
      )
    );
  }

  function setFunctionColor(newFunctionColor) {
    currenFunctionColor = newFunctionColor;
  }

  function applyColorToCellOnGrid() {
    sketchArea.addEventListener("mousemove", applyColor)
    sketchArea.addEventListener("mouseup", () => {sketchArea.removeEventListener("mousemove", applyColor)});
  }

  function applyColor(event) {
    if (event.target.nodeName === "DIV") {
      event.target.style.backgroundColor = currenFunctionColor();
    }
  }

  function render(gridSize) {
    sketchArea.innerHTML = ""
    createDivs(gridSize)
  }

  function createDivs(gridSize) {
    for (let i = 0; i < gridSize; i++) {
      let newDiv = document.createElement("div");
      for (let j = 0; j < gridSize; j++) {
        let innerDiv = document.createElement("div");
        newDiv.append(innerDiv);
      }
      sketchArea.append(newDiv);
    }
  }

  render(48);
})()