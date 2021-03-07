import React, { useState, useEffect, useDebugValue } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [counterValue, setCounterValue] = useState(0);

  useEffect(() => {
    document.title = `Counter Value: ${counterValue}`;
    alert("I again Rendered")
  });

  return (
    <>
      <h2>{counterValue}</h2>
      <button
        type="button"
        className="btn"
        onClick={() => setCounterValue((c) => c + 1)}
      >
        Increment Value
      </button>
    </>
  );
};

export default UseEffectBasics;
