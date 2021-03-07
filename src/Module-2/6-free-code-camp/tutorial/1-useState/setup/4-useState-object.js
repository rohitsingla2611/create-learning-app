import React, { useState } from "react";

const UseStateObject = () => {
  const [roleList, setRoleList] = useState({
    role1: "Internee",
    role2: "Professional",
    role3: "Entrepreneur",
    role4: "Social Worker",
    role5: "Politician",
  });
  const onKeyChangeHandler = () => {
    if (roleList["role1"] === "Successful Proceed") {
      roleList["role1"] = "Internee";
    } else {
      roleList["role1"] = "Successful Proceed";
    }
    console.log(roleList["role1"]);
    setRoleList({ ...roleList });
  };
  return (
    <>
      {Object.keys(roleList).map((keys) => (
        <h2 key={keys}>
          {keys} &nbsp; {roleList[keys]}
        </h2>
      ))}
      <button type="button" className="btn" onClick={onKeyChangeHandler}>
        Change Key
      </button>
    </>
  );
};

export default UseStateObject;
