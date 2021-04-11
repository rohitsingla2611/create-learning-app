import React from "react";

const ErrorExample = () => {
  let errorTitle = "You can't Change Me";

  const onClickHandler = () => {
    errorTitle = "You Failed";
    alert(errorTitle);
    console.log(errorTitle);
    console.error(errorTitle);
  };

  return (
    <>
      <h1>{errorTitle}</h1>
      <button type="button" className="btn" onClick={onClickHandler}>
        Try Change
      </button>
    </>
  );
};

export default ErrorExample;
