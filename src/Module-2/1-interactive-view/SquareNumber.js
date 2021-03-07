import React, { useState } from "react";
import InteractiveView from "./InteractiveView";

const SquareNumber = () => {
  const [squareNumber, squaring] = useState(0);
  let numberRandom;
  // squareNumber = Math.floor(Math.random() * 100);

  const squareHandler = () => {
    numberRandom = Math.floor(Math.random() * 100);

    squaring(numberRandom * numberRandom);
    console.log(squareNumber);
  };

  return (
    <InteractiveView
      actionText="Square Number"
      onAction={squareHandler}
      value={squareNumber}
    />
  );
};

export default SquareNumber;
