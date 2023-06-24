import React from "react";

const light = (props) => {
  return (
    <div
      className={
        "rounded-circle street-light mt-3 pd" +
        (props.active === props.color ? " selected" : " ")
      }
      style={{ backgroundColor: props.color }}
    ></div>
  );
};

export default light;