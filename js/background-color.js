const backgroundColor = (function (){
  const INITIAL_STATE = null;
  const backgroundColorClass = {
    "Win": {player: "green-background", computer: "red-background"},
    "Tie": {player: "yellow-background", computer: "yellow-background"},
    "Lose": {player: "red-background", computer: "green-background"},
  };

  pubSub.subscribe("backgroundChange", setBackgroundColor)

  function getBackgroundColor(result) {
    return backgroundColorClass[result];
  }

  function setBackgroundColor(object) {
    if (object.currentBg !== null) {
      object.elementReference.classList.remove(object.currentBg);
    }
    if (object.newBg !== null) {
    object.elementReference.classList.add(object.newBg);
    }
  }
  return {getBackgroundColor, INITIAL_STATE};
})()