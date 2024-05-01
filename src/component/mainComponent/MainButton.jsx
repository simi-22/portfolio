import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useSelectedWorkStore } from "../../store/selectWorkStore";

const MainButtonWrap = styled.ul`
  display: flex;
  padding-top: 25px;
  & > li {
    margin-right: 10px;
  }
`;
const ProjectButton = styled.button`
  font-size: 13px;
  outline: none;
  cursor: pointer;
  padding: 5px 20px;
  position: relative;
  display: inline-block;
  border-radius: 6px;
  text-align: center;
  transition: top 0.01s linear;
  border: none;
  background-color: #eeeeee;
  box-shadow: 0 0 0 1px #fff inset, 0 0 0 2px rgba(255, 255, 255, 0.15) inset,
    0 4px 0 0 rgba(207, 207, 207, 0.7), 0 4px 0 1px rgb(255, 255, 255),
    0 4px 4px 1px rgba(255, 255, 255, 0.5);
  &:active {
    top: 4px;
    box-shadow: 0 0 0 1px #fff inset, 0 0 0 2px rgba(255, 255, 255, 0.15) inset,
      0 0 0 1px rgb(255, 255, 255);
  }
`;

const MainButton = () => {
  const { selectedWork, setSelectedWork } = useSelectedWorkStore();
  return (
    <MainButtonWrap>
      <li>
        <Link to="/works" onClick={() => setSelectedWork("React")}>
          <ProjectButton>React</ProjectButton>
        </Link>
      </li>
      <li>
        <Link to="/works" onClick={() => setSelectedWork("JavaScript")}>
          <ProjectButton>JavaScript</ProjectButton>
        </Link>
      </li>
      <li>
        <Link to="/works" onClick={() => setSelectedWork("Publishing")}>
          <ProjectButton>Publishing</ProjectButton>
        </Link>
      </li>
    </MainButtonWrap>
  );
};

export default MainButton;
