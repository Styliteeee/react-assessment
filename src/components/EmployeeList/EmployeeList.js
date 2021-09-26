import React, { Fragment } from "react";
import style from "./EmployeeList.module.css";

const EmployeeList = (props) => {
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
            <li className="list-group-item">An item</li>
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
            <li className="list-group-item">A fourth item</li>
            <li className="list-group-item">And a fifth one</li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default EmployeeList;
