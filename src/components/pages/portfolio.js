import React from "react";
import Project from "../project/project";

class Portfolio extends React.Component {
  state = {
    projects: [
      {
        name: "Time Zone Traveler",
        description: "Find interesting travel stops and add your own",
        href: "https://eatandplay.herokuapp.com/",
        preview: "/assets/images/Time Zone Traveler.png",
      },
      {
        name: "Song Scout",
        description: "Learn more about your favorite artists and albums",
        href: "https://outoftune266.github.io/Song-Scout/",
        preview: "assets/images/songscout.png",
      },
      {
        name: "Weather Dashboard",
        description:
          "See current weather and 5-day forecasts for a customizable list of cities",
        href: "https://outoftune266.github.io/06-Weather-Dashboard/",
        preview: "/assets/images/weather.png",
      },
      {
        name: "Eat That Burger!",
        description: "Cloud database for tracking burgers eaten",
        href: "https://evening-lowlands-70965.herokuapp.com/",
        preview: "/assets/images/eatthatburger.png",
      },
    ],
  };

  render() {
    return (
      <div>
        <section class="resume-section" id="portfolio">
          <div class="resume-section-content">
            <h2 class="mb-5">Portfolio</h2>
            <Project projects={this.state.projects} />
          </div>
        </section>
        <hr class="m-0" />
      </div>
    );
  }
}

export default Portfolio;
