(function sketchArea() {
  // Cache DOM
  const sketchArea = document.querySelector(".sketch-area");
  let currentFunction = applyCurrentColor;
  let currentColor = "black"

  // Bind Events
  sketchArea.addEventListener("mousemove", applyColorToCellOnGrid);

  // Subscribe Events
  pubSub.subscribe("newGridSize", render);
  pubSub.subscribe("newDefaultColor", setDefaultColor);
  pubSub.subscribe("eraser", eraseSketchArea);

  function eraseSketchArea() {
    Array.from(sketchArea.children).forEach(
      div => Array.from(div.children).forEach(
        innerDiv => innerDiv.removeAttribute("style")
      )
    );
  }

  function setDefaultColor(newDefaultColor) {
    currentColor = newDefaultColor;
  }

  function applyColorToCellOnGrid(event) {
    if (event.target.nodeName === "DIV") {
      event.target.style.backgroundColor = currentFunction();
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

  function applyCurrentColor() {
    return (function() {return currentColor})();
  }

  render(48);
})()