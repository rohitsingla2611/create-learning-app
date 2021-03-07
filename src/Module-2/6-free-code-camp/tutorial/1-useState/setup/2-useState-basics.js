import React, { useState } from "react";
import { Fragment } from "react";

const UseStateBasics = () => {
  const [title, setTitle] = useState("You will able to change me!!!");
  const onTitleChangeHandler = () => {
    if (title === "You Passed!!!") {
      setTitle("You will able to change me!!!");
    } else {
      setTitle("You Passed!!!");
    }
  };
  return (
    <Fragment>
      <h1>{title}</h1>
      <button type="button" className="btn" onClick={onTitleChangeHandler}>
        Change Title
      </button>
    </Fragment>
  );
};

export default UseStateBasics;
