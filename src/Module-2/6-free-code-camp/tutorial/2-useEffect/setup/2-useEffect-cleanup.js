import React, { useEffect, useState } from "react";

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [resizeHeight, setResizeHeight] = useState(window.innerHeight);
  const [resizeWidth, setResizeWidth] = useState(window.innerWidth);

  const heightSizeChange = () => {
    setResizeHeight(window.innerHeight);
  };
  const widthSizeChange = () => {
    setResizeWidth(window.innerWidth);
  };

  useEffect(() => {
    console.log(`Render even **height** any other event ${resizeHeight}`);
    window.addEventListener("resize", heightSizeChange);
    return () => {
      window.removeEventListener("resize", heightSizeChange);
    };
  }, [resizeHeight]);

  useEffect(() => {
    console.log(`Render even **width** any other event ${resizeWidth}`);
    window.addEventListener("resize", widthSizeChange);
    // return () => {
    //   window.removeEventListener("resize", widthSizeChange);
    // };
  }, [resizeWidth]);
  return (
    <>
      <h2 style={{ marginTop: "3rem" }}>Height Size Change</h2>
      <h1>{resizeHeight}</h1>
      <h2 style={{ marginTop: "3rem" }}>Width Size Change</h2>
      <h1>{resizeWidth}</h1>
    </>
  );
};

export default UseEffectCleanup;
