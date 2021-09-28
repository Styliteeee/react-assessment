import React, { Fragment } from "react";
import Card from "../Card/Card";
import style from "./ErrorModal.module.css";
import { useDispatch, useSelector } from "react-redux";
import { formActions } from "../../../store/redux-index";

export const ErrorModal = () => {
  const dispatch = useDispatch();

  const myHandler = () => {
    dispatch(formActions.toggleError(false));
  };
  return (
    <Fragment>
      <div className={style.backdrop} />
      <Card className={style.modal}>
        <header className={style.header}>
          <h2>Success!</h2>
        </header>
        <div className={style.content}>
          <p>Employee has been added successfully</p>
        </div>
        <footer className={style.actions}>
          <button className="btn btn-primary" onClick={myHandler}>
            Okay
          </button>
        </footer>
      </Card>
    </Fragment>
  );
};

export const NoInputErrorModal = () => {
  const dispatch = useDispatch();

  const myHandler = () => {
    dispatch(formActions.toggleInputError(false));
  };
  return (
    <Fragment>
      <div className={style.backdrop} />
      <Card className={style.modal}>
        <header className={style.header}>
          <h2>Warning!</h2>
        </header>
        <div className={style.content}>
          <p>Please provide input to all fields</p>
        </div>
        <footer className={style.actions}>
          <button className="btn btn-primary" onClick={myHandler}>
            Okay
          </button>
        </footer>
      </Card>
    </Fragment>
  );
};

export const ViewEmployee = () => {
  const employeeData = useSelector((state) => state.updateList);
  const dispatch = useDispatch();
  const _myHandler = () => {
    dispatch(formActions.viewToggle(false));
  };
  return (
    <Fragment>
      <div className={style.backdrop} />
      <Card className={style.modal}>
        <header className={style.header}>
          <h2>Employee Details</h2>
        </header>
        <div className={style.content}>
          <div className="col">
            <div className="row">
              <p>{"Enterprise ID: " + employeeData.e_id}</p>
            </div>
            <div className="row">
              <p>
                {"Name: " +
                  employeeData.firstName +
                  " " +
                  employeeData.middleName +
                  " " +
                  employeeData.lastName}
              </p>
            </div>
            <div className="row">
              <p>{"Email: " + employeeData.email}</p>
            </div>
            <div className="row">
              <p>{"Birthday : " + employeeData.bday}</p>
            </div>
          </div>
        </div>
        <footer className={style.actions}>
          <button className="btn btn-primary" onClick={_myHandler}>
            Okay
          </button>
        </footer>
      </Card>
    </Fragment>
  );
};
