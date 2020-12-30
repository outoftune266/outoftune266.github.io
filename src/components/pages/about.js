import React from "react";

function About() {
  return (
    <div>
      <section class="resume-section" id="about">
        <div class="resume-section-content">
          <h1 class="mb-0">
            Zak
            <span class="text-primary">Monnet</span>
          </h1>
          <div class="subheading mb-5">
            1020 North 7th St · Nashville, TN 37207 ·
            <a href="mailto:zakmonnet@gmail.com">zakmonnet@gmail.com</a>
          </div>
          <p class="lead mb-5">
            I am a Full-Stack Web Developer and musician. I currently serve on
            the Board of Directors for local non-profit Radio Free Nashville.
          </p>
          <div class="social-icons">
            <a
              title="LinkedIn"
              class="social-icon"
              href="https://www.linkedin.com/in/zakmonnet/"
              target="_blank"
            >
              <i class="fab fa-linkedin-in"></i>
            </a>
            <a
              title="Github"
              class="social-icon"
              href="https://github.com/outoftune266"
              target="_blank"
            >
              <i class="fab fa-github"></i>
            </a>
            <a
              title="Resume"
              class="social-icon"
              href="assets/Resume-Zak Monnet(11:24).pdf"
              target="_blank"
            >
              <i class="far fa-file"></i>
            </a>
          </div>
        </div>
      </section>
      <hr class="m-0" />
    </div>
  );
}

export default About;
