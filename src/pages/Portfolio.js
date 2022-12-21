import React from "react";
import "../styles/App.css";
import Assignment from "../components/Assignment.js";

export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      <div className="assignmentContainer"></div>
      <Assignment
        projectTitle="Suya"
        screenshot="images/project1.png"
        description="homepage with map and question about food"
        githubLink="https://github.com/bmckenzie88/suya"
        deployedLink="https://bmckenzie88.github.io/suya/"
      />
      <Assignment
        projectTitle="Renegade art"
        screenshot="images/project2.png"
        description="homepage of art site, images of paintings"
        githubLink="https://github.com/vicdotexe/renegade-art"
        deployedLink="https://renegadeart-team8.herokuapp.com/"
      />
      <Assignment
        projectTitle="Vroom car quiz"
        screenshot="images/project3.png"
        description="homepage with red car racing graphic"
        githubLink="https://github.com/swnova/project3"
        deployedLink=""
      />
      <Assignment
        projectTitle="Note Taker app"
        screenshot="images/note-taker.png"
        description="note taker app open"
        githubLink="https://github.com/phillipanthony11/note-taker-clean"
        deployedLink=""
      />
      <Assignment
        projectTitle="NoSql app"
        screenshot="images/nosql.png"
        description="NoSql information being processed in an Insomia window"
        githubLink="https://github.com/phillipanthony11/nosqlhomework11111"
        deployedLink=""
      />
      <Assignment

        projectTitle="Weather Api app"
        screenshot="images/weatherapi.png"
        description="Weather application showing a seven day forecast"
        githubLink="https://github.com/phillipanthony11/Week-4Homework1"
        deployedLink=""
      />
      <div className="under-api-app"></div>
    </div>
  );
}
