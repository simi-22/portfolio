import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  return (
    <MainButtonWrap>
      <li>
        <ProjectButton
          onClick={() => {
            navigate("/react");
          }}
        >
          React
        </ProjectButton>
      </li>
      <li>
        <ProjectButton
          onClick={() => {
            navigate("/javascript");
          }}
        >
          Javascript
        </ProjectButton>
      </li>
      <li>
        <ProjectButton
          onClick={() => {
            navigate("/publishing");
          }}
        >
          Publishing
        </ProjectButton>
      </li>
      <li>
        <ProjectButton>Etc</ProjectButton>
      </li>
    </MainButtonWrap>
  );
};

export default MainButton;
