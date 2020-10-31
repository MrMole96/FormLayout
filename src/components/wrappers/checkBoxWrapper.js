import React, { useState } from "react";

export const CheckBoxWrapper = (props) => {
  const [toggle, setToggle] = useState(null);
  const { isChess } = props.errors;
  let { value } = props.field;

  return (
    <div className="checkbox-wrapper">
      <label className="checkbox-wrapper__label">Can you play chess?</label>
      <div className="checkbox-wrapper__container">
        <div className="checkbox-wrapper__box">
          <label
            className={
              value === "true"
                ? "checkbox-wrapper__box--active"
                : "checkbox-wrapper__box"
            }
          >
            <input
              className="checkbox-wrapper__box__input"
              name="age"
              type="radio"
              // onChange={()=>setToggle(!toggle)}
              // checked={toggle}
              {...props.field}
              value={true}
              checked={value === "true"}
            />
            Yes
          </label>
        </div>
        <div className="checkbox-wrapper__box">
          <label
            className={
              value === "false"
                ? "checkbox-wrapper__box--active"
                : "checkbox-wrapper__box"
            }
          >
            <input
              className="checkbox-wrapper__box__input"
              name="age"
              type="radio"
              // onChange={()=>setToggle(!toggle)}
              // checked={!toggle}
              {...props.field}
              value={false}
              checked={value === "false"}
            />
            No
          </label>
        </div>
        <span
          className="checkbox-wrapper__error"
          style={{ visibility: isChess ? "visible" : "hidden" }}
        >
          {isChess}
        </span>
      </div>
    </div>
  );
};
