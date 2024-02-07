import React from "react";
import { NavLink } from "react-router-dom";

const SideNav = () => {
  return (
  <div className="side_nav">
    <span className="three_dots"></span>
    <span className="sw_title">Software Engineer</span>

    <div className="nav_links">
      <NavLink className={NavLink}><i className="fa-solid fa-sitemap"></i>Projects</NavLink>
      <NavLink><i className="fa-solid fa-folder"></i>Intellego</NavLink>
      <NavLink><i className="fa-solid fa-folder"></i>Video Chat</NavLink>
      <NavLink><i className="fa-regular fa-folder-open"></i>UrgeM5</NavLink>
      <NavLink><i className="fa-brands fa-square-github"></i>Github<i className="fa-solid fa-up-right-from-square"></i></NavLink>

      <div className="nav_sub_links">
        <NavLink><i className="fa-brands fa-react"></i>React.js</NavLink>
        <NavLink><i className="fa-brands fa-node-js"></i>Node.js</NavLink>
        <NavLink><i className="fa-brands fa-figma"></i>Figma</NavLink>
        <NavLink><i className="fa-solid fa-object-group"></i>Photoshop</NavLink>
      </div>
    </div>
  </div>
)
  }

  export default SideNav;
