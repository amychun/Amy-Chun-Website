import React from "react";
import { NavLink } from "react-router-dom";


const Navbar = () => {
  return (
    <div className="header">
      <div className="header_left">
        <div className="logo"></div>
        <div className="title"><span className="softwareEngineerTitle">software engineer</span> & <span className="graphicDesignTitle">graphic designer</span></div>
      </div>
      <div className="header_right">
        <input type="checkbox" className="switchMode" id="switchMode"/>
        <label htmlFor="switchMode">
          <i className="fa-solid fa-code codeIcon"></i>
          <i className="fa-solid fa-pen-nib penIcon"></i>
          </label>

        {/*The window that toggles from web mode to design mode*/}
        <div className="switchModeBKG"></div>

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
