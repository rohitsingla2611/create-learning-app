import React from "react";
import "./Person.css";

const person = ({ name, age, deleteName, title, nameChanged }) => {
  return (
    <div className="Person">
      <h1>
        {" "}
        I am "{name}" and I am "{age}" old.
      </h1>
      <h2 onClick={deleteName}>{title}</h2>
      <input type="text" onChange={nameChanged} maxLength="15" value={name} />
      {/* <h4>{props.children}</h4> */}
      {/* <p>I am in Person.js File </p>
            <h1>
                I have {Math.floor(Math.random() * 20)} experience
            </h1> */}
    </div>
  );
};

export default person;
