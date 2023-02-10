const backgroundFactory = (function() {
  function createBackgroundObject(elementReference, currentBg, newBg) {
    return {elementReference: elementReference, currentBg: currentBg, newBg: newBg};
  }

  return {createBgObject: createBackgroundObject}
})()