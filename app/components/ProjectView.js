import React from "react";
import Intellego from "./Projects/Intellego";

const ProjectView = () => {
  return (
    <div className="project_view">
      {/* Window Topbar */}
      <div className="top_windowbar">
        <div className="top_windowbar_tab">
          <i
            className="fa-regular fa-folder title-folder"
            style={{ display: "inline-block" }}
          ></i>
          <h3 style={{ display: "inline-block" }}>UrgeM5</h3>
        </div>
      </div>

      {/* Project Content */}
      <Intellego />

      {/* Bottom Windowbar */}
      <div className="bottom_windowbar">
        <h5>
          LF &nbsp; Line &nbsp;18:36 &nbsp; UTF-8 &nbsp; 3spaces&nbsp;&nbsp;
          <i className="fa-solid fa-code-branch"></i>&nbsp;main
        </h5>
      </div>
    </div>
  );
};

export default ProjectView;
