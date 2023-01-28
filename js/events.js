function addEventGenerateGridInRangeMove() {
  grid.gridInputRange.addEventListener("mousedown", () => {
    grid.gridInputRange.addEventListener("mousemove", generateGrid)
  })
  grid.gridInputRange.addEventListener("mouseup", () => {
    grid.gridInputRange.removeEventListener("mousemove", generateGrid)
  })
}