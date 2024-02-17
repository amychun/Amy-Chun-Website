import React, { useState, useEffect } from "react";
import img1 from "../project/Intellego00.jpg";
import img2 from "../project/Intellego01.jpg";

const Intellego = ({ addindexprops }) => {
  return (
    <div className="project_view">
      {/* Window Topbar */}
      <div className="top_windowbar">
        <div className="top_windowbar_tab">
          <i
            className="fa-regular fa-folder title-folder"
            style={{ display: "inline-block" }}
          ></i>
          <h3 style={{ display: "inline-block" }}>Intellego</h3>
        </div>
      </div>

      {/* Project Content */}
      <div className="two_column_view">
        <div className="num_span">
          <div className="numbers">{addindexprops}</div>
        </div>
        <div className="project_content">
          <h1>
            Intellego
            <a
              href="https://github.com/Manananaam/Intellego"
              target="_blank"
              className="ExtrenalLinkIcon"
            >
              <i className="fa-solid fa-up-right-from-square"></i>
            </a>
          </h1>
          <h4>// Date 2023.02.14</h4>
          <p>
            A dashboard for teachers to create and administer casual formative
            assessments during class time, and track and review data on student
            performance.
          </p>
          <div className="projectImage">
            <img src={img2} />
          </div>
          <p>
            To begin, log in or sign up for an account. You will be taken to
            your dashboard, where you can view and create courses, view and
            create assessments, and view all students. Also available are
            reports displaying performance data broken down by courses, students
            and assessments, all of which can be exported. Assessments, once
            created and assigned to a course, will be sent to students for them
            to be filled out. They will be given a unique ID number to verify
            their identity before submitting. Once they submit, teachers will be
            able to view and grade submissions. Assessments may also be assigned
            to other courses, or just edited if there are no submissions.
          </p>
          <div className="projectImage">
            <img src={img1} />
          </div>
          <br />
          <h2>Setting up the project</h2>
          <br />
          <hr />
          <br />
          <ol>
            <li>Create a PostgreSQL Database with the name 'intellego'</li>
            <li> Clone the project main branch to your local computer</li>
            <li>Add.env file to the root directory of the project folder</li>
            <li>
              Paste this content to the .env file: <br />
              JWT_SECRET = manananaam JWT_EXPIRES = 30d API_KEY =
              ZJ9bYyxzfyvashxGmMyCUdQs
            </li>
            <li>Run npm run seed to seed data to database</li>
            <li>Run npm run start:dev to run the project</li>
            <li>
              In browser, go to url : localhost:8080 Log in with existing
              account or sign up with new account email: kara@email.com
              password: 123123
            </li>
            <li>
              To view a submission form, visit this url :
              localhost:3015/student/courses/114/assessments/105 verify student
              ID with 100
            </li>
          </ol>
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
export default Intellego;
