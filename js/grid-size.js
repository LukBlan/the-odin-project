(function gridSize() {

  // Cache DOM
  const gridSizeDisplay = document.querySelector(".grid-size-display");
  const gridSizeRange = document.getElementById("grid-size")

  // Bind Events
  gridSizeRange.addEventListener("input", resizeGrid);

  function resizeGrid(event) {
    const newSize = event.target.value;
    pubSub.emit("newGridSize", newSize);
    render(newSize);
  }

  function render(newSize) {
    gridSizeDisplay.innerText = `${newSize} x ${newSize}`
  }
})()