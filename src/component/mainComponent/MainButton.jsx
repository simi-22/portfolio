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
  & > li:nth-of-type(3) {
    margin-right: 0;
  }
`;
const ProjectButton = styled.button`
  font-size: 13px;
  outline: none;
  cursor: pointer;
  position: relative;
  display: inline-block;
  border-radius: 20px;
  text-align: center;
  transition: top 0.01s linear;
  border: none;
  background-color: #eeeeee;
  box-shadow: 0 0 0 1px #fff inset, 0 0 0 2px rgba(255, 255, 255, 0.15) inset,
    0 4px 0 0 rgba(207, 207, 207, 0.7), 0 4px 0 1px rgb(255, 255, 255),
    0 4px 4px 1px rgba(255, 255, 255, 0.5);
  padding: 5px 20px;
  /* background-color: #eeeeee;
  border-radius: 20px;
  border: none;
  outline: none;
  font-size: 12px;
  font-weight: bold;
  padding: 15px 45px;
  letter-spacing: 1px;
  text-transform: uppercase; 
  cursor: pointer;
  transition: transform 80ms ease-in;
  box-shadow: -2px -2px 5px #fff, 2px 2px 5px #babebc;*/
  &:active {
    top: 4px;
    box-shadow: 0 0 0 1px #fff inset, 0 0 0 2px rgba(255, 255, 255, 0.15) inset,
      0 0 0 1px rgb(255, 255, 255);
  }
  @media (max-width: 560px) {
    font-size: 12px;
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
