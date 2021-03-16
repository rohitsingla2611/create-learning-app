import React, { cloneElement } from "react";

const Parent = (props) => {
  return (
    <div>
      {React.Children.map(props.children, (child, index) =>
        cloneElement(child, { name: "DR " + index })
      )}
      {console.log(props.children)}
    </div>
  );
};
export default Parent;
