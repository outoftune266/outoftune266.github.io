import React from "react";

function Skills() {
  return (
    <div>
      <section class="resume-section" id="skills">
        <div class="resume-section-content">
          <h2 class="mb-5">Skills</h2>
          <div class="subheading mb-3">Programming Languages & Tools</div>
          <ul class="list-inline dev-icons">
            <li title="HTML 5" class="list-inline-item">
              <i class="fab fa-html5"></i>
            </li>
            <li title="CSS 3" class="list-inline-item">
              <i class="fab fa-css3-alt"></i>
            </li>
            <li title="Javascript" class="list-inline-item">
              <i class="fab fa-js-square"></i>
            </li>
            <li title="React" class="list-inline-item">
              <i class="fab fa-react"></i>
            </li>
            <li title="Node.js" class="list-inline-item">
              <i class="fab fa-node-js"></i>
            </li>
            <li title="Express" class="list-inline-item">
              <i class="fas fa-server"></i>
            </li>
            <li title="Node Package Manager" class="list-inline-item">
              <i class="fab fa-npm"></i>
            </li>
            <li title="MySQL/NoSQL" class="list-inline-item">
              <i class="fas fa-database"></i>
            </li>
          </ul>
        </div>
      </section>
      <hr class="m-0" />
    </div>
  );
}

export default Skills;
