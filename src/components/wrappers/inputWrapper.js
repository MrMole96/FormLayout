import React from "react";
import "./wrappers.scss";

export const InputWrapper = (props) => {
  const { name } = props.errors;
  return (
    <div className="input-wrapper">
      <label className="input-wrapper__label">Your name</label>
      <input className="input-wrapper__input" {...props.field}></input>
      <span className="input-wrapper__error" style={{visibility: name? "visible" : "hidden"}}>{name}</span>
    </div>
  );
};
