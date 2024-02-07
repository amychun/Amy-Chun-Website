import React from "react";

const ProjectView = () => {
  return (
  <div className="two_column_view">
    <div className="num_span">
    <div className="numbers">1 2 3 4 5</div>
    </div>
    <div className="project_content">
      <h1>UrgeM5<i className="fa-solid fa-up-right-from-square"></i></h1>
      <h4>// Date 2023.01.30</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non orci molestie erat dapibus aliquam a nec nulla. Duis accumsan lectus vel metus pharetra dictum. Morbi vestibulum massa sit amet sagittis placerat. Sed egestas porta diam, non suscipit neque aliquet eu. Maecenas eu nisl varius, egestas libero ac, tempus metus.</p>
        <div className="projectImage">
          <img src="https://dummyimage.com/400x300"/>
        </div>
      </div>
  </div>
  )
}

export default ProjectView;
