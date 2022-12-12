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
         
          <a href="http://www.github.com" target="_blank" className="proj-link">
             Project 1
          </a>
        {/* </div> */}
        <div className="other-work">
          
          <a href="http://www.github.com" target="_blank" className="proj-link">
             Project 2
          </a>
        </div>
        <div className="other-work">
          
          <a href="http://www.github.com" target="_blank" className="proj-link">
             Project 3
          </a>
        </div>
        <div className="other-work">
          
          <a href="http://www.github.com" target="_blank" className="proj-link">
             Project 4
          </a>
        </div>
        <div className="other-work">
          
          <a href="http://www.github.com" target="_blank" className="proj-link">
             Project 5
          </a>
        </div>
        <div className="other-work">
  
          <a href="http://www.github.com" target="_blank" className="proj-link">
             Project 6
          </a>
        </div>
      </div>
    </div>
  );
}
