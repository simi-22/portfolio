import React from "react";
import styled from "styled-components";

const ProjectList = styled.li`
  & > div > img {
    width: 300px;
  }
`;
const WorksItem = ({
  image,
  title,
  projectType,
  frontSkill,
  backSkill,
  projectAddress,
  githubAddress,
}) => {
  return (
    <ProjectList>
      <div>
        <img src={image} alt={title} />
      </div>
      <div>
        <p>{projectType}</p>
        <div>{title}</div>
        <div>
          사용기술
          <p>Frontend: {frontSkill}</p>
          {backSkill && <p>Backend: {backSkill}</p>}
        </div>
        <ul>
          <li>
            <a href={projectAddress} target="_blank" rel="noreferrer">
              웹사이트
            </a>
          </li>
          <li>
            <a href={githubAddress} target="_blank" rel="noreferrer">
              깃허브
            </a>
          </li>
        </ul>
      </div>
    </ProjectList>
  );
};

export default WorksItem;
