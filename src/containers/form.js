import React from "react";
import { CheckBoxWrapper } from "../components/wrappers/checkBoxWrapper";
import { DateWrapper } from "../components/wrappers/dateWrapper";
import { InputWrapper } from "../components/wrappers/inputWrapper";
import { NumberWrapper } from "../components/wrappers/numberWrapper";
import { ReactComponent as Arrow } from "../assets/Combined shape 3887.svg";

import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import moment from "moment";

import "./form.scss";

const SignupSchema = Yup.object().shape({
  name: Yup.string().min(3, "Too Short!").required("Required"),
  prefix: Yup.string().required("Required"),
  number: Yup.string()
    .test(
      "len",
      "Must be exactly 9 digits",
      (val) => val.replaceAll(" ", "").length === 9
    )
    .required("Required"),
  isChess: Yup.boolean()
    .nullable()
    .test("check", "Required", (val) => val !== null),
  day: Yup.string(),
  month: Yup.string().test(
    "Is an adult",
    "You are not 18 years old",
    function () {
      var values = this.parent;
      var start = moment(
        values.day + values.month + values.year,
        "DD MMMM YYYY"
      );
      var range = moment().diff(start, "years");

      return range > 18;
    }
  ),
  year: Yup.string().test("Valid date", "Date is invalid", function () {
    var values = this.parent;
    var date = moment(
      values.day === undefined ? values.day : null + values.month + values.year,
      "DD MMMM YYYY"
    ).isValid();
    return date;
  }),
});

export const FormContainer = () => {
  return (
    <Formik
      initialValues={{
        name: "",
        prefix: "",
        number: " ",
        isChess: null,
        day: "",
        month: "",
        year: "",
      }}
      validationSchema={SignupSchema}
      validateOnChange={false}
      validateOnBlur={false}
      onSubmit={(values) => {
        alert("send");
      }}
    >
      {({ errors, touched, handleSubmit, getFieldProps, setFieldValue }) => (
        <form onSubmit={handleSubmit} style={{ position: "relative" }}>
          <h4 className="form__heading">Your account</h4>
          <div className="form__container">
            <div className="form__container__left_box">
              <div className="form__container__left_box__layer">
                <div className="form__container__left_box__lines"></div>
              </div>
            </div>
            <div className="form__container__box">
              <ul className="form__container__box__list">
                <li className="form__container__box__list__step">
                  <span>01</span>
                </li>
                <li className="form__container__box__list__step--active">
                  <span className="d-block">02</span>
                  <span> Personal</span>
                </li>
                <li className="form__container__box__list__step">
                  <span>03</span>
                </li>
              </ul>
              <p className="form__container__box__description">
                Provide personal information so that we can create a new account
                for you.
              </p>
              <div className="form__container__box__inputs">
                <Field name="name" component={InputWrapper} errors={errors} />
                <Field
                  component={NumberWrapper}
                  errors={errors}
                  prefixField={getFieldProps("prefix")}
                  numberField={getFieldProps("number")}
                />

                <Field
                  name="isChess"
                  component={CheckBoxWrapper}
                  errors={errors}
                />

                <Field
                  name="date"
                  component={DateWrapper}
                  dayField={getFieldProps("day")}
                  monthField={getFieldProps("month")}
                  yearField={getFieldProps("year")}
                  setFieldValue={setFieldValue}
                  errors={errors}
                />
              </div>
              <button type="submit" className="form__container__btn-container">
                <div className="form__container__btn-container__text">
                  Continue
                </div>
                <div className="form__container__btn-container__arrow">
                  <Arrow />
                </div>
              </button>
            </div>
          </div>
        </form>
      )}
    </Formik>
  );
};
