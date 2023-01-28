function addEventGenerateGridInRangeMove() {
  grid.gridInputRange.addEventListener("mousedown", () => {
    grid.gridInputRange.addEventListener("mousemove", generateGrid)
  })
  grid.gridInputRange.addEventListener("mouseup", () => {
    grid.gridInputRange.removeEventListener("mousemove", generateGrid)
  })
}

function addEventToToggleRainbowColor() {
  const rainbowButton = document.querySelector(".rainbow");
  rainbowButton.addEventListener("click", toggleRainbow)
}

function addEventWhenSelectColorWithColorPicker() {
  const colorPicker = document.getElementById("color-picker");
  colorPicker.addEventListener("input", () => {
    grid.colorPicker = colorPicker.value;
  })
}

function addEventChangeGridSizeDisplay() {
  const gridDisplay = document.querySelector(".grid-size-display");
  grid.gridInputRange.addEventListener("input", () => {
    gridDisplay.innerText = grid.gridInputRange.value.toString() + "x" + grid.gridInputRange.value
  })
}