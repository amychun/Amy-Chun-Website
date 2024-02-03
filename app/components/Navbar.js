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
        <i class="fa-brands fa-github"></i>
      </div>
    </div>
  );
};

export default Navbar;
