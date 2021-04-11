import React, { useState } from "react";

const OnMessage = () => <span>The Machine is ON !</span>;
const OffMessage = () => <span>The Machine is OFF!</span>;

const OnOff = ({ isOn }) => {
  //  Method One
  if (isOn) {
    return <OnMessage />;
  } else {
    return <OffMessage />;
  }
};

const UltimateMachine = () => {
  const [isOn, setIsOn] = useState(false);
  const onClickHandler = () => {
    setIsOn((i) => !i);
  };

  let message; // Method Two
  if (isOn) {
    message = <OnMessage />;
  } else {
    message = <OffMessage />;
  }
  const getMessage = () => {
    // Method Three
    if (isOn) {
      return <OnMessage />;
    } else {
      return <OffMessage />;
    }
  };
  return (
    <section>
      <h1>The Ultimate Machine</h1>
      {/*<OnOff isOn={isOn} /> {// Method One } 
      {// Conditional rendering with an if statement}*/}
      {/*{message} {// Method Two }*/}
      {/* {getMessage()} {// Method Three }*/}
      {/*{isOn ? <OnMessage /> : <OffMessage />} {// Method 4 } 
      {// Conditional rendering with the ternary operator} */}
      {/* {isOn && <OnMessage/>} {// Method 5 } 
      {// Conditional Rendering With The Boolean AND Operator }*/}
      {!isOn && <OffMessage />}
      <button type="button" onClick={onClickHandler} aria-pressed={isOn}>
        ON / OFF
      </button>
    </section>
  );
};
export default UltimateMachine;
