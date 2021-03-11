import React, { Fragment } from "react";

const Counter = ({ counterValue, counterValueClick }) => {
  return (
    <Fragment>
      <h1>Counter Value: {counterValue}</h1>
      <button onClick={counterValueClick}>Increment</button>
    </Fragment>
  );
};

export default Counter;
