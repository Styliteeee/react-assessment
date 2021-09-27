import "./App.css";
import React, { useEffect} from "react";
import Header from "./components/Header/Header";
import EmployeeForms from "./components/EmployeeForms/EmployeeForms";
import EmployeeList from "./components/EmployeeList/EmployeeList";
import { useDispatch } from "react-redux";
import { formActions } from "./store/redux-index";



function App() {
  const dispatch = useDispatch();

  //let resource = 'https://react-assessment.free.beeceptor.com/employeedata';

  const fetchEmployeesHandler = async () => {
    const response = await fetch('');
    const data = await response.json();
    const transformList = data.results.map((empData) => {
        return {
          key: Math.random().toString(),
          id: empData.id,
          firstName: empData.fname,
          middleName: empData.mname,
          lastName: empData.lname,
          email: empData.email,
          e_id: empData.enterpriseID,
          bday: empData.bday
          

          // key: Math.random().toString(),
          // id: empData.episode_id,
          // title: empData.title
        };
      });
      console.log(transformList);
    dispatch(formActions.importEmployee(transformList));
    dispatch(formActions.viewEmployee({}));
  }

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
