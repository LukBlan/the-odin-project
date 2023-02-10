(function colorPicker() {
  // Cache DOM
  const colorPicker = document.getElementById("color-picker");

  // Bind Event
  colorPicker.addEventListener("input", emitNewDefaultColor);

  // Subscribe Events
  pubSub.subscribe("rainbowColorIsActive", disableColorPicker);
  pubSub.subscribe("rainbowColorIsDisable", emitNewDefaultColor);

  function emitNewDefaultColor() {
    colorPicker.classList.add("active");
    pubSub.emit("colorPickerIsActive", applyCurrentColor(colorPicker.value));
  }

  function disableColorPicker() {
    if (colorPicker.className.includes("active")) {
      colorPicker.classList.remove("active");
    }
  }

  function applyCurrentColor(currentColor) {
    return function() {return currentColor};
  }
})()