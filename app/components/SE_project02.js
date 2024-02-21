import React from "react";

const ProjectView = ({ addindexprops }) => {
  return (
    <div className="project_view">
      {/* Window Topbar */}
      <div className="top_windowbar">
        <div className="top_windowbar_tab">
          <i
            className="fa-regular fa-folder title-folder"
            style={{ display: "inline-block" }}
          ></i>
          <h3 style={{ display: "inline-block" }}>Projects Coming Up!</h3>
        </div>
      </div>

      {/* Project Content */}
      <div className="two_column_view">
        <div className="num_span">
          <div className="numbers">{addindexprops}</div>
        </div>
        <div className="project_content">
          <h1>
            Project Coming Up!
            {/* <i className="fa-solid fa-up-right-from-square"></i> */}
          </h1>
          <h4>// Date 2024.02.16</h4>
          <p>
            Another project is in the brewing procees! ☕️ it's coming up pretty
            soon! This website was create to showcase not only software engineer
            parts but also design aspects of me. So, I'm intending to build
            another "Desginer" toggle switch to showcase it! Here are some of
            the things I'm currently working on!
          </p>
          <br />
          <ol>
            <li>Adding a 'Designer' tab(toggle) to the website</li>
            <li>Making it responsive!</li>
            <li>Work on a Video-Chat project</li>
            <li>Work on a Music sorting project (database)</li>
          </ol>

          {/* <div className="projectImage">
            <img src="https://dummyimage.com/400x300" />
          </div> */}
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
