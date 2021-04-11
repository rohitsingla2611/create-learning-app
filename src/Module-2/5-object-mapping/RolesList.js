import React from "react";

const sourceObj = {
  role1: "Internee",
  role2: "Professional",
  role3: "Entrepreneur",
  role4: "Social Worker",
  role5: "Politician",
};
const RolesList = () => (
  <section>
    <h1> Roles List</h1>
    <ol>
      {Object.keys(sourceObj).map((key) => (
        <li key={key}>
          {key} {sourceObj[key]}
        </li>
      ))}
    </ol>
  </section>
);

export default RolesList;
