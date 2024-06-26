import React from "react";
import ReactWorks from "../component/worksComponent/ReactWorks";
import JsWorks from "../component/worksComponent/JsWorks";
import PublishingWorks from "../component/worksComponent/PublishingWorks";

import { useSelectedWorkStore } from "../store/selectWorkStore";
import styled from "styled-components";

const ProjectButton = styled.ul`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  padding-top: 40px;
  & > li {
    margin-right: 10px;
  }
  & > li > button {
    font-size: 12px;
    outline: none;
    cursor: pointer;
    padding: 4px 10px;
    position: relative;
    display: inline-block;
    border-radius: 20px;
    text-align: center;
    transition: top 0.01s linear;
    border: none;
    background-color: #f1f1f1;
    box-shadow: 0 0 0 1px #fff inset, 0 0 0 2px rgba(255, 255, 255, 0.15) inset,
      0 4px 0 0 rgba(186, 186, 186, 0.7), 0 4px 0 1px rgb(255, 255, 255),
      0 4px 4px 1px rgba(255, 255, 255, 0.5);
  }
  & > li > button.active {
    top: 3px;
    background-color: #cccccc;
    box-shadow: 0 0 0 1px #fff inset, 0 0 0 2px rgba(255, 255, 255, 0.15) inset,
      0 0 0 1px rgb(255, 255, 255);
  }
  @media (max-width: 1020px) {
    max-width: 600px;
  }
  @media (max-width: 630px) {
    max-width: 300px;
  }
`;
const ProjectContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  max-width: 1000px;
  padding-top: 20px;
  margin: 0 auto;
  gap: 20px;
  margin-bottom: 50px;
  @media (max-width: 1020px) {
    grid-template-columns: repeat(2, 1fr);
    max-width: 600px;
  }
  @media (max-width: 630px) {
    grid-template-columns: repeat(1, 1fr);
    max-width: 300px;
  }
`;
const Projects = () => {
  const { selectedWork, setSelectedWork } = useSelectedWorkStore();

  const showReactWorks = () => {
    setSelectedWork("React");
  };

  const showJsWorks = () => {
    setSelectedWork("JavaScript");
  };

  const showPublishingWorks = () => {
    setSelectedWork("Publishing");
  };
  return (
    <div>
      <ProjectButton>
        <li>
          <button
            className={selectedWork === "React" ? "active" : ""}
            onClick={showReactWorks}
          >
            React
          </button>
        </li>
        <li>
          <button
            className={selectedWork === "JavaScript" ? "active" : ""}
            onClick={showJsWorks}
          >
            JavaScript
          </button>
        </li>
        <li>
          <button
            className={selectedWork === "Publishing" ? "active" : ""}
            onClick={showPublishingWorks}
          >
            Publishing
          </button>
        </li>
      </ProjectButton>
      <ProjectContainer>
        {selectedWork === "React" && <ReactWorks />}
        {selectedWork === "JavaScript" && <JsWorks />}
        {selectedWork === "Publishing" && <PublishingWorks />}
      </ProjectContainer>
    </div>
  );
};

export default Projects;
