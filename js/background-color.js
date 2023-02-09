const backgroundColor = (function (){
  const backgroundColorClass = {
    "Win": "green-background",
    "Tie": "yellow-background",
    "Lose": "red-background",
  };

  function getBackgroundClassBy(result) {
    return backgroundColorClass[result];
  }
  return {getBackgroundClassBy}
})()