import React, { useState } from "react";
import "./wrappers.scss";
export const NumberWrapper = (props) => {
  const [number, setnumber] = useState("");
  const inputChangeHandler = (x) => {
    var word = "";
    var index = 0;
    for (let i = 0; i < x.length; i++) {
      const element = x[i];
      if (number.slice(-1) !== " ") {
        if (element === " ") {
        } else {
          index++;
          word += element;
        }

        if (index === 3) {
          word += " ";
          index = 0;
        }
      } else {
        word += element;
      }
    }
    setnumber(() => word);
  };
  const { numberField, prefixField } = props;
  return (
    <div className="number-wrapper">
      <label className="number-wrapper__label">Mobile</label>
      <div className="d-flex">
        <div className="number-wrapper__prefix">
          <select {...prefixField}>
            <option></option>
            <option>+12 (GER)</option>
            <option>+32 (HUR)</option>
            <option>+48 (PL)</option>
          </select>
          <span
            className="number-wrapper__error"
            style={{ visibility: props.errors.prefix ? "visible" : "hidden" }}
          >
            {props.errors.prefix}
          </span>
        </div>
        <div className="number-wrapper__input">
          <input
            {...numberField}
            // onChange={(e) => inputChangeHandler(e.target.value)}
          />
          {/* <span className="number-wrapper__error">Invalid data</span> */}
          <span
            className="number-wrapper__error"
            style={{ visibility: props.errors.number ? "visible" : "hidden" }}
          >
            {props.errors.number}
          </span>
        </div>
      </div>
    </div>
  );
};
