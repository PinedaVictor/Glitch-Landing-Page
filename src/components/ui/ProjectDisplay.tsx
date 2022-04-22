import React from "react";
import { IconType } from "react-icons";

interface ProjectDisplayProps {
  projectImage: string;
  name: string;
  hasExternalLinks: boolean;
  links: { icon: IconType; color: string; link: string }[] | undefined;
}

export const ProjectDisplay: React.FC<ProjectDisplayProps> = (props) => {
  return (
    <div
      className="projectContainer"
      style={{
        backgroundImage: `url(${props.projectImage})`,
      }}
    >
      {props.hasExternalLinks &&
        props.links?.map(
          (item: { icon: IconType; color: string; link: string }, index) => (
            <div className="externalLinks" key={index}>
              <a href={item.link} rel="noreferrer" target="_blank">
                {<item.icon className="iconStyle" fill={item.color} />}
              </a>
            </div>
          )
        )}
    </div>
  );
};
