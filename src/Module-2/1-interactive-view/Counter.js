import React, { Fragment, useEffect, useState } from "react";
import InteractiveView from "./InteractiveView";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const onIncrementHandler = () => {
    setCounter((c) => c + 1);
  };
  useEffect(() => {
    const savedIncrementValue = localStorage.getItem("Increment Counter");
    if (savedIncrementValue != null)
      setCounter(parseInt(savedIncrementValue, 10));
  }, []);
  const onSaveClickHandler = () => {
    localStorage.setItem("Increment Counter", counter);
  };
  return (
    <Fragment>
      <InteractiveView
        value={counter}
        onAction={onIncrementHandler}
        onActionSave={onSaveClickHandler}
        actionText="Increment"
      />
      <button type="button" onClick={onSaveClickHandler}>
        Save Counter Value
      </button>
    </Fragment>
  );
};
export default Counter;
