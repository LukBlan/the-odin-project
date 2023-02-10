(function rainbowColor() {
  // Cache DOM
  const rainbowColorButton = document.querySelector(".rainbow");

  // Bind Events
  rainbowColorButton.addEventListener("click", emitRandomColor);

  // Subscribe Events
  pubSub.subscribe("newFunctionColor", disableRainbow)

  function emitRandomColor() {
    if (rainbowColorButton.classList.value.includes("active")) {
      rainbowColorButton.classList.remove("active");
    } else {
      rainbowColorButton.classList.add("active");
      pubSub.emit("newFunctionColor", {name: "randomColor", handler: randomColor});
    }
  }

  function disableRainbow(functionObject) {
    if (functionObject.name !== "randomColor") {
      rainbowColorButton.className = "button rainbow";
    }
  }

  function randomColor() {
    let number = (Math.floor(Math.random() * 16777214)).toString(16);
    return "#" + number;
  }
})()

