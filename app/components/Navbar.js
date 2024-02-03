import React from "react";
import { NavLink } from "react-router-dom";


const Navbar = () => {
  return (
    <div className="header">
      <div className="header_left">
        <div className="logo"></div>
        <div className="title">software engineer & graphic designer</div>
      </div>
      <div className="header_right">
        <div className="switchMode">
          <a href=""><i className="fa-solid fa-code"></i></a>
          <a href=""><i className="fa-solid fa-pen-nib"></i></a>
        </div>
        <div className="socialLinks">
          <a href=""><i className="fa-solid fa-envelope"></i></a>
          <a href=""><i className="fa-brands fa-github"></i></a>
          <a href=""><i className="fa-brands fa-linkedin"></i></a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
