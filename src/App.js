import "./App.css";
import React from "react";
import Header from "./components/Header/Header";
import EmployeeForms from "./components/EmployeeForms/EmployeeForms";
import EmployeeList from "./components/EmployeeList/EmployeeList";


function App() {
  return (
    <React.Fragment>
      <Header />
      <EmployeeForms />
      <EmployeeList />
    </React.Fragment>
  );
}

export default App;
