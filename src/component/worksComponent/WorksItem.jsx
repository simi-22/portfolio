import React from "react";
import styled from "styled-components";

import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProjectList = styled.li`
  display: flex;
  flex-direction: column;
  padding: 10px;
  background-color: #ffffff6c;
  border-radius: 10px;
  height: 370px;
  & > div:nth-of-type(1) {
    height: 48%;
    display: flex;
    align-items: end;
  }
  & > div:nth-of-type(2) {
    height: 52%;
    padding-top: 20px;
  }
  & > div > img {
    width: 100%;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    border-radius: 10px;
  }
  & > div:nth-of-type(2) > div {
    display: flex;
    justify-content: space-between;
  }
  & > div:nth-of-type(2) > div > p {
    display: inline-block;
    padding: 5px 7px;
    border-radius: 5px;
    background-color: #ea5858;
    font-size: 13px;
    color: #fff;
    margin-bottom: 4px;
  }
  & > div:nth-of-type(2) > div > ul.demoSite {
    display: flex;
  }
  & > div:nth-of-type(2) > div > ul.demoSite > li:first-of-type {
    margin-right: 10px;
  }
  & > div:nth-of-type(2) > div.title {
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 5px;
  }
  & > div:nth-of-type(2) > ul.skillList > li {
    display: flex;
  }
  & > div:nth-of-type(2) > ul.skillList > li > p:nth-of-type(1) {
    font-weight: bold;
    color: #ac4040;
    margin-right: 5px;
  }
  & > div:nth-of-type(2) > ul.skillList > li > p:nth-of-type(2) {
    font-weight: 200;
    font-size: 14px;
    line-height: 18px;
  }
  @media (max-width: 1020px) {
    & > div > img {
      width: 100%;
      margin: 0 auto;
    }
    & > div:nth-of-type(1) {
      height: 45%;
      display: flex;
      align-items: end;
    }
    & > div:nth-of-type(2) {
      height: 55%;
      padding-top: 20px;
    }
  }
`;
const WorksItem = ({
  image,
  title,
  projectType,
  frontSkill,
  backSkill,
  tool,
  content,
  projectAddress,
  githubAddress,
}) => {
  return (
    <ProjectList>
      <div>
        <img src={image} alt={title} />
      </div>
      <div>
        <div className="fl">
          <p>{projectType}</p>
          <ul className="demoSite">
            <li>
              <a href={projectAddress} target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faEye} size="1x" />
              </a>
            </li>
            <li>
              <a href={githubAddress} target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faGithub} size="1x" />
              </a>
            </li>
          </ul>
        </div>
        <div className="title">{title}</div>
        <ul className="skillList">
          <li>
            <p>Frontend: </p> <p>{frontSkill}</p>
          </li>
          {backSkill && (
            <li>
              <p>Backend: </p> <p>{backSkill}</p>
            </li>
          )}
          {tool && (
            <li>
              <p>Tools: </p>
              <p> {tool}</p>
            </li>
          )}
          {content && (
            <li className="content">
              <p>Work: </p>
              <p>{content}</p>
            </li>
          )}
        </ul>
      </div>
    </ProjectList>
  );
};

export default WorksItem;
