import React, { Fragment } from "react";
import style from "./EmployeeForms.module.css";
import { useDispatch, useSelector } from "react-redux";

const EmployeeForms = () => {
  const isToggle = useSelector((state) => state.isToggle);
  const dispatch = useDispatch();

  const onAddNewEmployeeHandler = () => {
    dispatch({
      type: "TOGGLE_FORM_ON",
      setToggle: true,
    });

    console.log(isToggle);
  };

  const onAddCancelEmployeeHandler = () => {
    dispatch({
      type: "TOGGLE_FORM_OFF",
      setToggle: false,
    });
    console.log(isToggle);
  };

  return (
    <Fragment>
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
                    className="form-control"
                    placeholder="First name"
                    aria-label="First name"
                  />
                </div>
                <div className="col">
                  <input
                    className="form-control"
                    placeholder="Middle name"
                    aria-label="Middle name"
                  />
                </div>
              </div>

              <div className={`${"row"} ${style.rowSpacing}`}>
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last name"
                    aria-label="Last name"
                  />
                </div>
                <div className="col">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email Address"
                    aria-label="Email Address"
                  />
                </div>
              </div>

              <div className={`${"row"} ${style.rowSpacing}`}>
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enterprise ID"
                    aria-label="Enterprise ID"
                  />
                </div>
                <div className="col">
                  <input type="date" className="form-control" />
                </div>
              </div>
              <div className="d-flex justify-content-end">
                <button
                  type="button"
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
