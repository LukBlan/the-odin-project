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
    const r = randomNumberUntil(255);
    const g = randomNumberUntil(255);
    const b = randomNumberUntil(255);
    return `rgb(${r}, ${g}, ${b})`
  }

  function randomNumberUntil(number) {
    return Math.floor(Math.random() * (number + 1));
  }
})()

