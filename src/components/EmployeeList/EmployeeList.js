import React, { Fragment } from "react";
import style from "./EmployeeList.module.css";
import { useSelector,  useDispatch } from "react-redux";
import { formActions } from "../../store/redux-index";

const EmployeeList = (props) => {
  const employeeList = useSelector((state) => state.employeeList);
  const toggling = useSelector((state) => state.isToggle);
  const dispatch = useDispatch();

  const updateHandler = () => {
      if(toggling === false) {
        window.alert("You need to open first the add new employee form to update");
      } else {
        // const updateList = () => {
        //     return { firstName: "alright", lastName: "Baldondo" };
        // }
        // dispatch(formActions.updateEmployee(updateList));
      }
  }

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
            {employeeList.map((data) => {
              return (
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  {"Name: " + data.firstName + " " + data.lastName}
                  <span>
                    <button className={`${"btn btn-success"} ${style.setButtonSpace}`} 
                            onClick={updateHandler}>Update</button>
                    <button className={`${"btn btn-danger"} ${style.setButtonSpace}`}>Delete</button>
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
