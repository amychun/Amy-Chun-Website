import React from "react";
import { NavLink } from "react-router-dom";
import SideNav from "./SideNav"
import ProjectView from "./ProjectView";

const Main = () => {
  return (
  <div className="main">
    <div className="container">
      <SideNav/>

      <div className="project_view">
        <div className="top_windowbar">
          <div className="top_windowbar_tab">
            <i className="fa-regular fa-folder title-folder" style={{display:"inline-block"}}></i>
            <h3 style={{display:"inline-block"}}>UrgeM5</h3>
          </div>
        </div>

        <ProjectView/>

        <div className="bottom_windowbar">
          <h5>LF &nbsp;  Line  &nbsp;18:36 &nbsp;  UTF-8 &nbsp;  3spaces <i className="fa-solid fa-code-branch"></i>main</h5>
        </div>

      </div>
    </div>
  </div>
  );
};

export default Main;
