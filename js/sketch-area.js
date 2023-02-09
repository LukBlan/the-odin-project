(function sketchArea() {
  // Cache DOM
  const sketchArea = document.querySelector(".sketch-area");

  // Subscribe Events
  pubSub.subscribe("newGridSize", render);

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
})()