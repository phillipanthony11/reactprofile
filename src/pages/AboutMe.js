import React from "react";
import "../styles/App.css";

export default function AboutMe() {
  return (
    <div>
      <h1>About Me</h1>
      <img className="aboutmeimg" src="images/aboutme.png"/>
      <p className="aboutmewords">
        I am recently coming out of a fullstack coding program. Previous to this
        my education consisted of a highschool diploma, a year of creative
        writing at Evergreen state college then 2 years of prerequisites at
        South Puget Sound community college. I have 17 years of restaurant
        experience seperated between 3 busineses. At this point I am hoping to
        pivot my career into something that allows for a more balanced
        profesional work enviroment.
      </p>
    </div>
  );
}
