import React from "react";

function Education() {
  return (
    <div>
      <section class="resume-section" id="education">
        <div class="resume-section-content">
          <h2 class="mb-5">Education</h2>
          <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div class="flex-grow-1">
              <h3 class="mb-0">Vanderbilt University</h3>
              <div class="subheading mb-3">Nashville, TN</div>
              <div>Full Stack Web Development Bootcamp</div>
              <p>Certificate</p>
            </div>
            <div class="flex-shrink-0">
              <span class="text-primary">August 2020 - January 2021</span>
            </div>
          </div>
          <div class="d-flex flex-column flex-md-row justify-content-between">
            <div class="flex-grow-1">
              <h3 class="mb-0">Belmont University</h3>
              <div class="subheading mb-3">Nashville, TN</div>
              <div>Bachelor of Music</div>
              <p>Commercial Music - Composition and Arranging Emphasis</p>
            </div>
            <div class="flex-shrink-0">
              <span class="text-primary">August 2005 - December 2009</span>
            </div>
          </div>
        </div>
      </section>
      <hr class="m-0" />
    </div>
  );
}

export default Education;
