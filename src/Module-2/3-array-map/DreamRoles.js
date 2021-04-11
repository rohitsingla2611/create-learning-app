import React, { Fragment, useState } from "react";

const rolesList = [
  { id: 1, name: "Internee" },
  { id: 2, name: "Professional" },
  { id: 3, name: "Entrepreneur" },
  { id: 4, name: "Social Worker" },
  { id: 5, name: "Politician" },
];
const rolesList1 = [
  "Internee",
  "Professional",
  "Entrepreneur",
  "Social Worker",
  "Politician",
];
const rolesList2 = [
  "Social Worker",
  "Internee",
  "Professional",
  "Entrepreneur",
  "Politician",
];

const DreamRoles = () => {
  const [rolesList0, setRoleList] = useState(rolesList1);
  const displayRolesList = rolesList0.map((item, index) => (
    <Fragment key={item}>
      {/* <li key={item}> */}
      <li>
        <label htmlFor={`item-${index}`}>{item}</label>
        <input id={`item-${index}`}></input>
      </li>
    </Fragment>
  ));

  const onClickHandler = () =>
    setRoleList(rolesList0 === rolesList1 ? rolesList2 : rolesList1);
  return (
    <section>
      <h1>Roles To Be Done :- </h1>
      {displayRolesList}
      {/* {rolesList.map((item) => (
        <li key={item.id.toString()}>{item.name}</li>
      ))} */}
      <button type="button" onClick={onClickHandler}>
        Change
      </button>
    </section>
  );
};

export default DreamRoles;
