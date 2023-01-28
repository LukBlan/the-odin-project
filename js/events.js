function addEventGenerateGridInRangeMove() {
  grid.gridInputRange.addEventListener("mousedown", () => {
    grid.gridInputRange.addEventListener("mousemove", generateGrid)
  })
  grid.gridInputRange.addEventListener("mouseup", () => {
    grid.gridInputRange.removeEventListener("mousemove", generateGrid)
  })
}

function addEventToToggleRainbowColor() {
  const rainbowButton = document.getElementById("rainbow");
  rainbowButton.addEventListener("click", toggleRainbow)
}