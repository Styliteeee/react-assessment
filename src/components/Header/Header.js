import React from "react";
import style from "./Header.module.css";

const Header = (props) => {
  return (
    <nav className="navbar fixed-top navbar-dark bg-dark">
      <div className="container-fluid">
        <h4 className="navbar-brand">
          <img
            src="https://www.pinclipart.com/picdir/big/190-1906897_new-applied-now-accenture-logo-greater-than-clipart.png"
            alt=""
            width="30"
            height="24"
            className={`${"d-inline-block align-text-top"} ${
              style.setImageSpacing
            }`}
          />
          Accenture Workbook
        </h4>
        <span className="navbar-text">Made by Christian Balondo</span>
      </div>
    </nav>
  );
};

export default Header;
