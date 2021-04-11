import React from "react";
import Counter from "./Counter";
import SquareNumber from "./SquareNumber";

const App = () => {
  // const someData = " hello there get data";
  // let count = 0;
  // const Interval = setInterval(() => {
  //   console.log(count);
  //   if (count === 100) clearInterval(Interval);
  //   else count++;
  //   //   return count;
  // }, 30);
  // const Heading = <h1>Here i the counter {count}</h1>;
  return (
    <main>
      <hr />
      <hr />
      <Counter />
      {/* <Heading></Heading> */}
      <hr />
      <hr />
      <hr />
      <hr />
      <SquareNumber />
      <hr />
      <hr />
    </main>
  );
};

export default App;
