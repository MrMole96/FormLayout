import React, { useState } from "react";

export const DateWrapper = (props) => {
  const [day, setDay] = useState("");
  const [year, setYear] = useState("");

  const { dayField, monthField, yearField, setFieldValue } = props;

  const errorDate = props.errors.year;
  const errorAdult = props.errors.month;

  const dayOnChangeHandler = (day) => {
    if (day.length !== 3) {
      setDay(day);
      setFieldValue("day", day);
    }
  };

  const populateYears = () => {
    var array = [];
    for (let index = 1920; index <= 2020; index++) {
      array.push(index);
    }
    return array;
  };

  const populateMonth = () => {
    var array = [];
    for (let index = 1; index <= 12; index++) {
      if (index < 10) array.push("0" + index);
      else array.push(index);
    }
    return array;
  };
  const months = [
    "January",
    "February",
    "March",
    "April",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div className="date-wrapper">
      <label className="date-wrapper__label">Date of birth</label>
      <div className="d-flex center-vertical">
        <input
          {...dayField}
          className="date-wrapper__input"
          type="number"
          onChange={(e) => dayOnChangeHandler(e.target.value)}
          maxLength={2}
          value={day}
          placeholder="01"
        />
        <div className="date-wrapper__separator"></div>
        <select className="date-wrapper__select--mobile" {...monthField} placeholder="sss">
        <option value="" disabled>01</option>
          {populateMonth().map((x, index) => (
            <option key={index}>{x}</option>
          ))}
        </select>
        <select className="date-wrapper__select" {...monthField}>
        <option value="" disabled>Month</option>
          {months.map((x, index) => (
            <option key={index}>{x}</option>
          ))}
        </select>
        <div className="date-wrapper__separator"></div>
        <select
          className="date-wrapper__input"
          {...yearField}
        >
           <option value="" disabled>Year</option>
          {populateYears().map((x, index) => (
            <option key={index}>{x}</option>
          ))}
        </select>
      </div>
      <span
        className="date-wrapper__error"
        style={{ visibility: errorDate ? "visible" : "hidden" }}
      >
        {errorDate}
      </span>
      <span
        className="date-wrapper__error"
        style={{ visibility: (!errorDate && errorAdult) ? "visible" : "hidden" }}
      >
        {errorAdult}
      </span>
    </div>
  );
};
