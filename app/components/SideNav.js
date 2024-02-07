import React from "react";
import { NavLink } from "react-router-dom";

const SideNav = () => {
  return (
    <div className="side_nav">
      <span className="three_dots"></span>
      <span className="sw_title">Software Engineer</span>

      <ul className="nav_links">
        <li>
          <NavLink>
            <i className="fa-solid fa-sitemap"></i>Projects
          </NavLink>
        </li>

        <li>
          <NavLink>
            <i className="fa-solid fa-folder"></i>Intellego
          </NavLink>
        </li>
        <li>
          <NavLink>
            <i className="fa-solid fa-folder"></i>Video Chat
          </NavLink>
        </li>
        <li>
          <NavLink>
            <i className="fa-regular fa-folder-open"></i>UrgeM5
          </NavLink>
        </li>
        <li>
          <NavLink>
            <i className="fa-brands fa-square-github"></i>Github
            <i className="fa-solid fa-up-right-from-square"></i>
          </NavLink>
        </li>

        <ul className="nav_sub_links">
          <li>
            <NavLink>
              <i className="fa-brands fa-react"></i>React.js
            </NavLink>
          </li>
          <li>
            <NavLink>
              <i className="fa-brands fa-node-js"></i>Node.js
            </NavLink>
          </li>
          <li>
            <NavLink>
              <i className="fa-brands fa-figma"></i>Figma
            </NavLink>
          </li>
          <li>
            <NavLink>
              <i className="fa-solid fa-object-group"></i>Photoshop
            </NavLink>
          </li>
        </ul>
      </ul>
    </div>
  );
};

export default SideNav;
