(function bomb() {
  // Cache DOM
  const bomb = document.querySelector(".bomb");

  // Bind Events
  bomb.addEventListener("click", emitBombEvent);

  function emitBombEvent() {
    pubSub.emit("bomb", null);
  }
})()