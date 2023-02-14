(function colorPicker() {
  // Cache DOM
  const colorPicker = document.getElementById("color-picker");

  // Bind Event
  colorPicker.addEventListener("input", toggleColorPicker);
  pubSub.subscribe("removeColorPicker",removeColorPiker);
  pubSub.subscribe("activeColorPicker",toggleColorPicker);

  function toggleColorPicker() {
    if (!colorPicker.className.includes("active")) {
      colorPicker.classList.add("active");
    }
    pubSub.emit("removeRainbowColor", null);
    pubSub.emit("removeEraser", null);
    pubSub.emit("changeCursorIcon", "pen-cursor");
    pubSub.emit("newOptionSelected", applyCurrentColor(colorPicker.value));
  }

  function removeColorPiker() {
    if (colorPicker.className.includes("active")) {
      colorPicker.classList.remove("active");
    }
  }

  function applyCurrentColor(currentColor) {
    return () => {return currentColor};
  }
})()