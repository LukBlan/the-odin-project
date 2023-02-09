(function colorPicker() {
  // Cache DOM
  const colorPicker = document.getElementById("color-picker");

  colorPicker.addEventListener("input", emitNewDefaultColor);

  function emitNewDefaultColor(event) {
    pubSub.emit("newDefaultColor", event.target.value)
  }
})()