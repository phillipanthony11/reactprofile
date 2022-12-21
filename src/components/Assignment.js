import React from "react";

function Assignment({
  projectTitle,
  screenshot,
  description,
  githubLink,
  deployedLink,
}) {
  return (
    <div className="assignment">
      <h3>{projectTitle}</h3>
      <img src={screenshot} alt={description} />
      <a href={githubLink} target="_blank">
        GitHub repo
      </a>
      <a href={deployedLink}>Deployed application</a>
    </div>
  );
}

export default Assignment;
