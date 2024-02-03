import React from "react";
import { NavLink } from "react-router-dom";


const Navbar = () => {
  return (
    <div className="header">
      <div className="header_left">
        <NavLink to="/">Amy Chun</NavLink>
      </div>
      <div className="header_right">
        <NavLink to="/candies">All Candies List</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
