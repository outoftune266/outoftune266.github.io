import React from "react";

function Project(props) {
  return (
    <div>
      {props.projects.map((project) => (
        <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
          <div class="flex-grow-1">
            <h3 class="mb-0">{project.name}</h3>
            {/* <!-- <div class="subheading mb-3"></div> --> */}
            <p>{project.description}</p>
            <a href={project.href} target="_blank">
              <img
                class="img-fluid rounded mb-3 mb-md-0"
                src={project.preview}
                alt="Preview"
              />
            </a>
          </div>
          <div title="See it in action!" class="flex-shrink-0 social-icons">
            <a class="social-icon" href={project.href} target="_blank">
              <i class="far fa-play-circle"></i>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Project;
