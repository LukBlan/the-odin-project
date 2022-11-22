createDivs(35);

function createDivs(number) {
  const sketchArea = document.querySelector("#sketch-area");
  for (let i = 0; i < number; i++) {
    let newDiv = document.createElement("div");
    newDiv.classList.add("newDiv");
    for (let j = 0; j < number; j++) {
      let innerDiv = document.createElement("div");
      innerDiv.classList.add("innerDiv");
      newDiv.append(innerDiv)
    }

    sketchArea.append(newDiv)
  }
}