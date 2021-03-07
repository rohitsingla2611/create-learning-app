import React, { useState } from "react";

const UseStateCounter = () => {
  const [counterValue, setCounterValue] = useState(0);

  const complexCounterHandler = () => {
    setTimeout(() => {
      setCounterValue((prevState) => prevState + 1);
    }, 2000);
  };
  return (
    <>
      <h2 style={{ margin: "4rem" }}>Regular Counter</h2>
      <h1>{counterValue}</h1>
      <button
        type="button"
        className="btn"
        onClick={() => setCounterValue((c) => c - 1)}
      >
        Decrease
      </button>
      <button type="button" className="btn" onClick={() => setCounterValue(0)}>
        Reset
      </button>
      <button
        type="button"
        className="btn"
        onClick={() => setCounterValue((c) => c + 1)}
      >
        Increase
      </button>

      <h2 style={{ margin: "4rem 0" }}>More Complex Counter</h2>
      <h1>{counterValue}</h1>
      <button type="button" className="btn" onClick={complexCounterHandler}>
        Increase Later
      </button>
    </>
  );
};

export default UseStateCounter;
