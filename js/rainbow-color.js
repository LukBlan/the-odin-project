(function rainbowColor() {
  // Cache DOM
  const rainbowColorButton = document.querySelector(".rainbow");

  // Bind Events
  rainbowColorButton.addEventListener("click", emitToggleRainbowColorEvent);

  function emitToggleRainbowColorEvent() {
    let rainbowIsActive;
    if (rainbowColorButton.classList.value.includes("active")) {
      rainbowColorButton.classList.remove("active");
      rainbowIsActive = false;
    } else {
      rainbowColorButton.classList.add("active");
      rainbowIsActive = true;
    }
    pubSub.emit("toggleRainbowColor", rainbowIsActive);
  }
})()