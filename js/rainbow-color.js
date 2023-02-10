(function rainbowColor() {
  // Cache DOM
  const rainbowColorButton = document.querySelector(".rainbow");

  // Bind Events
  rainbowColorButton.addEventListener("click", emitRandomColor);

  // Subscribe Events
  pubSub.subscribe("colorPickerIsActive", disableRainbow);

  function emitRandomColor() {
    if (!rainbowColorButton.classList.value.includes("active")) {
      rainbowColorButton.classList.add("active");
      pubSub.emit("rainbowColorIsActive", randomColor);
    } else {
      disableRainbow()
      pubSub.emit("rainbowColorIsDisable", null);
    }
  }

  function disableRainbow() {
    if (rainbowColorButton.className.includes("active")) {
      rainbowColorButton.classList.remove("active");
    }
  }

  function randomColor() {
    let number = (Math.floor(Math.random() * 16777214)).toString(16);
    return "#" + number;
  }
})()

