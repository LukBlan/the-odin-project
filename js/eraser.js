(function eraser() {

  // Cache DOM
  const eraser = document.querySelector(".eraser");

  // Bind Events
  eraser.addEventListener("click", emitEraserEvent);

  function emitEraserEvent() {
    pubSub.emit("eraser", null);
  }
})()