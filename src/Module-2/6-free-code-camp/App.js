import React from "react";
import UseStateExample from "./tutorial/1-useState/setup/5-useState-counter"
// import UseStateExample from "./tutorial/1-useState/final/5-useState-counter"

// import UseEffectExample from "./tutorial/2-useEffect/setup/3-useEffect-fetch-data";

const App = () => {
  return (
    <div className="container">
      {/* <h2>Advanced Tutorial</h2> */}
      <UseStateExample/>
      {/* <UseEffectExample /> */}
    </div>
  );
};

export default App;
