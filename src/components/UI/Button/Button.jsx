import React from "react";

import "./Button.css";

const button = (props) => {
  const Button = "Button";
  return (
    <button className={Button + " " + props.btnType} onClick={props.clicked}>
      {props.children}
    </button>
  );
};

export default button;
