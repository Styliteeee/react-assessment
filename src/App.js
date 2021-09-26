import "./App.css";
import React from "react";
import Header from "./components/Header/Header";
import EmployeeForms from "./components/EmployeeForms/EmployeeForms";


function App() {
  return (
    <React.Fragment>
      <Header />
      <EmployeeForms />
    </React.Fragment>
  );
}

export default App;
