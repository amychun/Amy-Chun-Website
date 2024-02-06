import React from "react";
import { NavLink } from "react-router-dom";

const Main = () => {
  return (
  <div className="main">
    <div className="container">
      <div className="side_nav">
        <span></span>
        <span>Software Engineer</span>
        <NavLink><i class="fa-solid fa-sitemap">Projects</i></NavLink>
        <NavLink><i class="fa-solid fa-folder">Intellego</i></NavLink>
        <NavLink><i class="fa-solid fa-folder">Video Chat</i></NavLink>
        <NavLink><i class="fa-regular fa-folder-open">UrgeM5</i></NavLink>
        <NavLink><i class="fa-brands fa-square-github">Github</i><i class="fa-solid fa-up-right-from-square"></i></NavLink>
          <NavLink><i class="fa-brands fa-react">React.js</i></NavLink>
          <NavLink><i class="fa-brands fa-node-js">Node.js</i></NavLink>
          <NavLink><i class="fa-brands fa-figma">Figma</i></NavLink>
          <NavLink><i class="fa-solid fa-object-group">Photoshop</i></NavLink>
      </div>
      <div className="project_view">
        <span>
          <i class="fa-regular fa-folder"></i>
          <h3>UrgeM5</h3>
        </span>
        <div>
          <span className="numbers">1</span>
            <div className="project_content">
              <h1><i class="fa-solid fa-up-right-from-square">UrgeM5</i></h1>
              <h4>Date 2023.01.30</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non orci molestie erat dapibus aliquam a nec nulla. Duis accumsan lectus vel metus pharetra dictum. Morbi vestibulum massa sit amet sagittis placerat. Sed egestas porta diam, non suscipit neque aliquet eu. Maecenas eu nisl varius, egestas libero ac, tempus metus.</p>
                <div className="projectImage">
                  <img src="https://dummyimage.com/16:9x720"/>
                </div>
              </div>
          <span className="bottom_container">
            <h3>LF  Line 18:36  UTF-8  3spaces <i class="fa-solid fa-code-branch"></i>main</h3>
          </span>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Main;
