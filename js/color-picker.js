(function colorPicker() {
  // Cache DOM
  const colorPicker = document.getElementById("color-picker");

  // Bind Event
  colorPicker.addEventListener("input", emitNewDefaultColor);

  pubSub.subscribe("newFunctionColor", disableColorPicker)

  function emitNewDefaultColor(event) {
    colorPicker.classList.add("active");
    pubSub.emit("newFunctionColor",{name: "applyCurrentColor", handler: applyCurrentColor(event.target.value)});
  }

  function disableColorPicker(functionObject) {
    if (functionObject.name !== "applyCurrentColor") {
      colorPicker.className = "button";
    }
  }

  function applyCurrentColor(currentColor) {
    return function() {return currentColor};
  }
})()