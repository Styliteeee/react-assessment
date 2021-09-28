import "./App.css";
import React, { useEffect } from "react";
import Header from "./components/Header/Header";
import EmployeeForms from "./components/EmployeeForms/EmployeeForms";
import EmployeeList from "./components/EmployeeList/EmployeeList";
import { useDispatch } from "react-redux";
import { formActions } from "./store/redux-index";

function App() {
  const dispatch = useDispatch();
  let resource = "https://tryit.free.beeceptor.com/data";

  const fetchEmployeesHandler = async () => {
    const response = await fetch(resource);
    const data = await response.json();
    const transformList = data.results.map((empData) => {
      return {
        key: Math.random().toString(),
        id: empData.id.toString(),
        firstName: empData.fname,
        middleName: empData.mname,
        lastName: empData.lname,
        email: empData.email,
        e_id: empData.enterpriseID,
        bday: empData.bday,
      };
    });

    dispatch(formActions.importEmployee(transformList));
    dispatch(formActions.viewEmployee({}));
  };

  useEffect(() => {
    fetchEmployeesHandler();
  });

  return (
    <React.Fragment>
      <Header />
      <EmployeeForms />
      <EmployeeList />
    </React.Fragment>
  );
}

export default App;
