import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {

  const projItems = projects.map(item =>
    <ProjectItem
      name={item.name}
      key={item.id}
      about={item.about}
      technologies={item.technologies}
    />
  )
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{projItems}</div>
    </div>
  );
}

export default ProjectList;
