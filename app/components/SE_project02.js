import React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const ProjectView = (projectView) => {
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
      <div className="two_column_view">
        <div className="num_span">
          <div className="numbers">1 2 3 4 5</div>
        </div>
        <div className="project_content">
          <h1>
            UrgeM5<i className="fa-solid fa-up-right-from-square"></i>
          </h1>
          <h4>// Date 2023.01.30</h4>
          <p>
            Lorem ipsum dolor sit i vestibulum massa sit amet sagittis placerat.
            Sed egestas porta diam, non suscipit neque aliquet eu. Maecenas eu
            nisl varius, egestas libero ac, tempus metus.
          </p>
          <div className="projectImage">
            <img src="https://dummyimage.com/400x300" />
          </div>
        </div>
      </div>

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
