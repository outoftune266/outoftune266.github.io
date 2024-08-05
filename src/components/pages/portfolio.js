import React from "react";
import Project from "../project/project";

class Portfolio extends React.Component {
  state = {
    projects: [
      // {
      //   name: "K.I.T. - Keep in Touch",
      //   description:
      //     "A closed group messaging app with Web Socket functionality",
      //   github: "https://github.com/Andrea-Boyd/Project-3",
      //   href: "https://sheltered-plains-45359.herokuapp.com/",
      //   preview: "/assets/images/login_page.PNG",
      // },
      // {
      //   name: "Time Zone Traveler",
      //   description: "Find interesting travel stops and add your own",
      //   github: "https://github.com/outoftune266/Time-Zone-Traveler",
      //   href: "https://eatandplay.herokuapp.com/",
      //   preview: "/assets/images/Time Zone Traveler.png",
      // },
      // {
      //   name: "Song Scout",
      //   description: "Learn more about your favorite artists and albums",
      //   github: "https://github.com/outoftune266/Song-Scout",
      //   href: "https://outoftune266.github.io/Song-Scout/",
      //   preview: "assets/images/songscout.png",
      // },
      {
        name: "Card Game Counter",
        description:
          "Mobile-first application to keep score in your favorite card games!",
        github: "https://github.com/outoftune266/gamecounter",
        href: "https://outoftune266.github.io/gamecounter/",
        preview: "/assets/images/Card_Preview.png",
      },
      {
        name: "Weather Dashboard",
        description:
          "See current weather and 5-day forecasts for a customizable list of cities",
        github: "https://github.com/outoftune266/06-Weather-Dashboard",
        href: "https://outoftune266.github.io/06-Weather-Dashboard/",
        preview: "/assets/images/weather.png",
      },
      {
        name: "Work Day Scheduler",
        description:
          "Add tasks to your 9-5 workday",
        github: "https://github.com/outoftune266/05-Work-Day-Scheduler/",
        href: "https://outoftune266.github.io/05-Work-Day-Scheduler/",
        preview: "/assets/images/work_day.png",
      },
      // {
      //   name: "Eat That Burger!",
      //   description: "Cloud database for tracking burgers eaten",
      //   github: "https://github.com/outoftune266/13-Eat-That-Burger",
      //   href: "https://evening-lowlands-70965.herokuapp.com/",
      //   preview: "/assets/images/eatthatburger.png",
      // },
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
