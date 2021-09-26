import "./App.css";
import React, {useCallback, useEffect} from "react";
import Header from "./components/Header/Header";
import EmployeeForms from "./components/EmployeeForms/EmployeeForms";
import EmployeeList from "./components/EmployeeList/EmployeeList";
import { useDispatch } from "react-redux";
import { formActions } from "./store/redux-index";

function App() {
  const dispatch = useDispatch();

  const fetchEmployeesHandler = useCallback(async () => {
    const response = await fetch('https://employeefakedata.free.beeceptor.com/employeefakeinfo')
    const data = await response.json();
    const transformList = data.results.map((empData) => {
        return {
          key: empData.id,
          firstName: empData.fname,
          middleName: empData.mname,
          lastName: empData.lname,
          email: empData.email,
          e_id: empData.enterpriseID,
          bday: empData.birthday
        };
      });
    dispatch(formActions.importEmployee(transformList));
  },[])

  useEffect(() => {
    fetchEmployeesHandler();
  }, []);

  return (
    <React.Fragment>
      <Header />
      <EmployeeForms />
      <EmployeeList />
    </React.Fragment>
  );
}

export default App;
