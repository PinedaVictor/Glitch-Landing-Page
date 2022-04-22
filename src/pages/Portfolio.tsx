import React from "react";
import { ProjectDisplay } from "../components/ui";
import { projectData } from "../data/work";

export const Portfolio: React.FC = () => {
  return (
    <div className="projectsWrapper">
      {projectData.map((item, index) => (
        <div key={index}>
          <ProjectDisplay
            projectImage={item.image}
            name={item.name}
            hasExternalLinks={item.externalLinks}
            links={item.icons}
          />
        </div>
      ))}
    </div>
  );
};
