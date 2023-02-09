(function gridSize() {
  let newGridSize = 48;

  // Cache DOM
  const gridSizeDisplay = document.querySelector(".grid-size-display");
  const gridSizeRange = document.getElementById("grid-size")

  // Bind Events
  gridSizeRange.addEventListener("input", displayNewSize);
  gridSizeRange.addEventListener("mouseup", emitNewSizeEvent);

  function displayNewSize(event) {
    newGridSize = event.target.value;
    render();
  }

  function emitNewSizeEvent() {
    pubSub.emit("newGridSize", newGridSize);
  }

  function render() {
    gridSizeDisplay.innerText = `${newGridSize} x ${newGridSize}`
  }
})()