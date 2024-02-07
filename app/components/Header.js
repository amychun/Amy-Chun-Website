import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="header_left">
        <div className="logo" />
        <div className="title">
          <span className="softwareEngineerTitle">software engineer</span> &{" "}
          <span className="graphicDesignTitle">graphic designer</span>
        </div>
      </div>
      <div className="header_right">
        <input type="checkbox" className="switchMode" id="switchMode" />
        <label htmlFor="switchMode">
          <i className="fa-solid fa-code codeIcon" />
          <i className="fa-solid fa-pen-nib penIcon" />
        </label>

        <div className="socialLinks">
          <a href="">
            <i className="fa-solid fa-envelope" />
          </a>
          <a href="">
            <i className="fa-brands fa-github" />
          </a>
          <a href="">
            <i className="fa-brands fa-linkedin" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
