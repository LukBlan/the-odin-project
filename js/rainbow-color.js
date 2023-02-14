(function rainbowColor() {
  // Cache DOM
  const rainbowColorButton = document.querySelector(".rainbow");

  // Bind Events
  rainbowColorButton.addEventListener("click", toggleRainbowColor);
  pubSub.subscribe("removeRainbowColor", removeRainbowColor)

  function toggleRainbowColor() {
    if (rainbowColorButton.className.includes("active")) {
      rainbowColorButton.classList.remove("active");
      pubSub.emit("activeColorPicker", null);
    } else {
      rainbowColorButton.classList.add("active");
      pubSub.emit("changeCursorIcon", "pen-cursor");
      pubSub.emit("removeColorPicker",null);
      pubSub.emit("removeEraser",null);
      pubSub.emit("newOptionSelected", randomColor);
    }
  }

  function removeRainbowColor() {
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

