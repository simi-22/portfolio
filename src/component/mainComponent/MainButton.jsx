import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useSelectedWorkStore } from "../../store/selectWorkStore";

const MainButtonWrap = styled.ul`
  display: flex;
  padding-top: 40px;
  & > li {
    margin-right: 10px;
  }
`;
const ProjectButton = styled.button`
  font-size: 14px;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 5px 20px;
  background-color: #fff;
  box-shadow: -1px -1px 3px #fff, 1px 1px 3px #babebc;
  &:active {
    box-shadow: inset 1px 1px 2px #babebc, inset -1px -1px 2px #fff;
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
