import React from "react";
import { Link } from "@react-email/link";

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
        {/*Adding a switch mode for software engineer vs graphic design mode before the end of February!*/}
        {/* <input type="checkbox" className="switchMode" id="switchMode" />
        <label htmlFor="switchMode">
          <i className="fa-solid fa-code codeIcon" />
          <i className="fa-solid fa-pen-nib penIcon" />
        </label> */}

        <div className="socialLinks">
          {/* <Link href={`mailto:amyheeyong@msn.com`}>
            <i className="fa-solid fa-envelope" />
          </Link> */}
          <a href="https://github.com/amychun" target="_blank">
            <i className="fa-brands fa-github" />
          </a>
          <a href="https://linkedin.com/in/amyhchun" target="_blank">
            <i className="fa-brands fa-linkedin" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
