import React from "react";
import { NavLink } from "react-router-dom";
import SideNav from "./SideNav";
import ProjectView from "./ProjectView";

const Main = () => {
  return (
    <div className="main">
      <div className="container">
        <SideNav />
        <ProjectView />
      </div>
    </div>
  );
};

export default Main;
