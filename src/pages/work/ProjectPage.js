import React from "react";
import { useParams } from "react-router-dom";
import { portfolioData } from "../../data/portfolioData";

function ProjectPage() {
  const { projectId } = useParams();
  const project = portfolioData.find(p => p.link === `/projects/${projectId}`);

  if (!project) return <div>Project niet gevonden</div>;

  return (
    <div>
      <h1>{project.title}</h1>
      <img src={project.image} alt={project.title} />
      <p>{project.tags.join(", ")}</p>
    </div>
  );
}

export default ProjectPage;
