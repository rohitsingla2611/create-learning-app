import React, { useState } from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);
  const removeitemHandler = (id) => {
    let updatePeople = people.filter((person) => person.id !== id);
    setPeople(updatePeople);
  };
  const onToggleHandler = () => {
    if (people === data) {
      setPeople([]);
    } else {
      setPeople(data);
    }
  };
  return (
    <>
      {people.map(({ id, name }) => (
        <div key={id} className="item">
          <h4>{name}</h4>
          <button onClick={() => removeitemHandler(id)}> remove</button>
        </div>
      ))}
      <button type="button" className="btn" onClick={onToggleHandler}>
        Toggle Button
      </button>
    </>
  );
};

export default UseStateArray;
