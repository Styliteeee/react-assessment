import React, { Fragment, useState, useRef } from "react";
import style from "./EmployeeForms.module.css";
import { useDispatch, useSelector } from "react-redux";
import { formActions } from "../../store/redux-index";
import {ErrorModal, ViewEmployee, NoInputErrorModal} from "../UI/ErrorModal/ErrorModal";

const EmployeeForms = () => {
  const [validatefName, setValidatefName] = useState(true);
  const [validatemName, setvalidatemName] = useState(true);
  const [validatelName, setvalidatelName] = useState(true);
  const [validateEmail, setvalidateEmail] = useState(true);
  const [validateBirthday, setvvalidateBirthday] = useState(true);
  const [validateEID, setvalidateEID] = useState(true);

  const fname = useRef();
  const mname = useRef();
  const lname = useRef();
  const e_id = useRef();
  const bday = useRef();
  const email = useRef();

  const isToggle = useSelector((state) => state.isToggle);
  const isError = useSelector((state) => state.isError);
  const isView = useSelector((state) => state.isView);
  const inputError = useSelector((state) =>state.noInput);
  
  const dispatch = useDispatch();

  const onAddNewEmployeeHandler = () => {
    dispatch(formActions.toggleFormOn(true));
  };

  const onAddCancelEmployeeHandler = () => {
    dispatch(formActions.toggleFormOff(false));
  };

  const onSaveEmployeeHandler = () => {
    if (
      fname.current.value === "" ||
      mname.current.value === "" ||
      lname.current.value === "" ||
      e_id.current.value === "" ||
      bday.current.value === "" ||
      email.current.value === ""
    ) {

      dispatch(formActions.toggleInputError(true))
      return;
    } else {
      dispatch(
        formActions.addNewEmployee({
          key: Math.random().toString(),
          id: Math.random().toString(),
          firstName: fname.current.value,
          middleName: mname.current.value,
          lastName: lname.current.value,
          email: email.current.value,
          e_id: e_id.current.value,
          bday: bday.current.value,
          // id: num,
          // title: fname.current.value,
        })
      );

      dispatch(formActions.toggleError(true));

      fname.current.value = "";
      mname.current.value = "";
      lname.current.value = "";
      email.current.value = "";
      e_id.current.value = "";
      bday.current.value = "";
    }
  };

  const fnameValidationChecker = (event) => {
    if (event.target.value === "") {
      setValidatefName(false);
    } else setValidatefName(true);
  };

  const mnameValidationChecker = (event) => {
    if (event.target.value === "") {
      setvalidatemName(false);
    } else setvalidatemName(true);
  };

  const lnameValidationChecker = (event) => {
    if (event.target.value === "") {
      setvalidatelName(false);
    } else setvalidatelName(true);
  };

  const emailValidationChecker = (event) => {
    if (event.target.value === "") {
      setvalidateEmail(false);
    } else setvalidateEmail(true);
  };

  const enterpriseValidationChecker = (event) => {
    if (event.target.value === "") {
      setvalidateEID(false);
    } else setvalidateEID(true);
  };

  const birthdayValidationChecker = (event) => {
    if (event.target.value === "") {
      setvvalidateBirthday(false);
    } else setvvalidateBirthday(true);
  };

  return (
    <Fragment>
      {inputError && <NoInputErrorModal />}
      {isError && <ErrorModal />}
      {isView && <ViewEmployee />}
      <div className={`${"d-flex justify-content-center"} ${style.setSpacing}`}>
        <div className={`${"container w-75 p-3"} ${style.changeBackground}`}>
          {isToggle && (
            <h5 className={`${"h5"} ${style.changeFontColor}`}>
              {" "}
              Add New Employee
            </h5>
          )}
          {isToggle && (
            <form>
              <div className={`${"row"} ${style.rowSpacing}`}>
                <div className="col">
                  <input
                    type="text"
                    className={
                      validatefName === false
                        ? "form-control is-invalid"
                        : "form-control is-valid"
                    }
                    placeholder="First name"
                    aria-label="First name"
                    ref={fname}
                    onChange={fnameValidationChecker}
                  />
                  <div className="invalid-feedback">
                    Please enter your first name.
                  </div>
                </div>
                <div className="col">
                  <input
                    className={
                      validatemName === false
                        ? "form-control is-invalid"
                        : "form-control is-valid"
                    }
                    placeholder="Middle name"
                    aria-label="Middle name"
                    ref={mname}
                    onChange={mnameValidationChecker}
                  />
                  <div className="invalid-feedback">
                    Please enter your middle name.
                  </div>
                </div>
              </div>

              <div className={`${"row"} ${style.rowSpacing}`}>
                <div className="col">
                  <input
                    type="text"
                    className={
                      validatelName === false
                        ? "form-control is-invalid"
                        : "form-control is-valid"
                    }
                    placeholder="Last name"
                    aria-label="Last name"
                    ref={lname}
                    onChange={lnameValidationChecker}
                  />
                  <div className="invalid-feedback">
                    Please enter your last name.
                  </div>
                </div>
                <div className="col">
                  <input
                    type="email"
                    className={
                      validateEmail === false
                        ? "form-control is-invalid"
                        : "form-control is-valid"
                    }
                    placeholder="Email Address"
                    aria-label="Email Address"
                    ref={email}
                    onChange={emailValidationChecker}
                  />
                  <div className="invalid-feedback">
                    Please enter your email address.
                  </div>
                </div>
              </div>

              <div className={`${"row"} ${style.rowSpacing}`}>
                <div className="col">
                  <input
                    type="number"
                    className={
                      validateEID === false
                        ? "form-control is-invalid"
                        : "form-control is-valid"
                    }
                    placeholder="Enterprise ID"
                    aria-label="Enterprise ID"
                    ref={e_id}
                    onChange={enterpriseValidationChecker}
                  />
                  <div className="invalid-feedback">
                    Please enter your enterprise id.
                  </div>
                </div>
                <div className="col">
                  <input
                    type="date"
                    className={
                      validateBirthday === false
                        ? "form-control is-invalid"
                        : "form-control is-valid"
                    }
                    ref={bday}
                    onChange={birthdayValidationChecker}
                  />
                  <div className="invalid-feedback">
                    Please enter your birthday.
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-end">
                <button
                  type="button"
                  onClick={onSaveEmployeeHandler}
                  className={`${"btn btn-primary"} ${style.buttonSpacing}`}
                >
                  Save
                </button>
                <button
                  type="button"
                  className={`${"btn btn-danger"} ${style.buttonSpacing}`}
                  onClick={onAddCancelEmployeeHandler}
                >
                  Cancel
                </button>
              </div>
            </form>
          )}
          <div className="d-flex justify-content-center">
            {!isToggle && (
              <button
                type="button"
                className={`${"btn btn-primary btn-block"}`}
                onClick={onAddNewEmployeeHandler}
              >
                Add New Accenture Employee
              </button>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EmployeeForms;
