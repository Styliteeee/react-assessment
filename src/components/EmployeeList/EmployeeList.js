import React, { Fragment } from "react";
import style from "./EmployeeList.module.css";
import { useSelector, useDispatch } from "react-redux";
import { formActions } from "../../store/redux-index";

const EmployeeList = (props) => {
  const employeeList = useSelector((state) => state.employeeList);
  const dispatch = useDispatch();

  // const updateHandler = (event) => {
  //   if (toggling === false) {
  //     dispatch(formActions.toggleError(true))
  //   } else {

  //   }
  // };

  const viewEmployeeDetails = (event) => {
    const indexNum = employeeList
      .map((e) => {
        return e.id;
      })
      .indexOf(event.target.id);

    dispatch(formActions.viewToggle(true));
    dispatch(formActions.viewEmployee(employeeList[indexNum]));
  };

  const deleteHandler = (event) => {
    const indexNum = employeeList
      .map((e) => {
        return e.id;
      })
      .indexOf(event.target.id);
      dispatch(formActions.deleteEmployee(indexNum));
  };

  return (
    <Fragment>
      <div className={`${"d-flex justify-content-center"} ${style.setSpacing}`}>
        <div className={`${"container w-75 p-3"} ${style.changeBackground}`}>
          <div className="d-flex justify-content-center">
            <h3 className={`${"h3"} ${style.changeFontColor}`}>
              List of Employees
            </h3>
          </div>

          <ul className="list-group">
            {employeeList.length === 0 && (
              <li className="list-group-item d-flex justify-content-between align-items-center">
                <div className="d-flex justify-content-center">
                  <p className="text-center">No data to display</p>
                </div>
              </li>
            )}
            {employeeList.length !== 0 &&
              employeeList.map((data) => {
                return (
                  <li
                    className="list-group-item d-flex justify-content-between align-items-center"
                    key={data.id}
                  >
                    <div className="container">
                      <div className="row">
                        <div className="col">
                          {"Name: " +
                            data.firstName +
                            " " +
                            data.middleName +
                            " " +
                            data.lastName}
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                          {"Enterprise ID: " + data.e_id}
                        </div>
                      </div>
                    </div>

                    <span>
                      <div className="container">
                        <div className="row">
                          <div className="col">
                            <button
                              className={`${"btn btn-success"} ${
                                style.setButtonSpace
                              }`}
                              onClick={viewEmployeeDetails}
                              id={data.id}
                            >
                              View
                            </button>
                          </div>
                          <div className="col">
                            <button
                              className={`${"btn btn-danger"} ${
                                style.setButtonSpace
                              }`}
                              id={data.id}
                              onClick={deleteHandler}
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    </span>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default EmployeeList;
