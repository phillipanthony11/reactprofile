import React from "react";

export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      <p>
        Donec a volutpat quam. Curabitur nec varius justo, sed rutrum ligula.
        Curabitur pellentesque turpis sit amet eros iaculis, a mollis arcu
        dictum. Ut vel ante eget massa ornare placerat. Etiam nisl orci, finibus
        sodales volutpat et, hendrerit ut dolor. Suspendisse porta dictum nunc,
      </p>
      <div className="work">
        {/* <div className="other-work"> */}

        <a
          href="https://github.com/bmckenzie88/suya"
          target="_blank"
          className="proj-link"
        >
          Project 1
        </a>
        {/* </div> */}
        <div className="other-work">
          <a
            href="https://github.com/vicdotexe/renegade-art"
            target="_blank"
            className="proj-link"
          >
            Project 2
          </a>
        </div>
        <div className="other-work">
          <a
            href="https://github.com/swnova/project3"
            target="_blank"
            className="proj-link"
          >
            Project 3
          </a>
        </div>
        <div className="other-work">
          <a
            href="https://github.com/phillipanthony11/note-taker-clean"
            target="_blank"
            className="proj-link"
          >
            Note Taker App
          </a>
        </div>
        <div className="other-work">
          <a
            href="https://github.com/phillipanthony11/nosqlhomework11111"
            target="_blank"
            className="proj-link"
          >
            No SQL app
          </a>
        </div>
        <div className="other-work">
          <a
            href="https://github.com/phillipanthony11/Week-4Homework1"
            target="_blank"
            className="proj-link"
          >
            Weather Api
          </a>
        </div>
      </div>
    </div>
  );
}
