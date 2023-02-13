(function gridButton() {
  const gridButton = document.querySelector(".grid")

  gridButton.addEventListener("mouseup", toggleGrid);

  function toggleGrid() {
    if (gridButton.className.includes("active")) {
      gridButton.classList.remove("active");
    } else {
      gridButton.classList.add("active");
    }
    pubSub.emit("toggleGrid", null);
  }
})()