import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import photo from "../../assets/profile.png";

const blink = keyframes` 
  40% {
    opacity:.5;
  }
  80% {
    opacity: 1;
  }
`;
const rotate = keyframes`
 100% {
    transform: rotate(1turn);
  }
`;

const CardWrap = styled.div`
  position: relative;
  width: 500px;
  height: 300px;
  margin: 0 auto;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;

  /* animation: ${blink} 3s linear infinite; */
  &::before {
    content: "";
    position: absolute;
    left: -250%;
    top: -250%;
    width: 600%;
    height: 600%;
    background: conic-gradient(#f3c5ff, #a7daeb, transparent 30%);
    animation: ${rotate} 4s linear infinite;
  }

  & > div {
    position: absolute;
    top: 4%;
    left: 2.5%;
    width: 95%;
    height: 92%;
    background-color: #fff;
    display: flex;
    align-items: center;
    padding: 20px;
    border-radius: 4px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  }
  & > div > ul {
    width: 70%;
    padding-left: 10px;
  }
  & > div > ul > li:first-of-type {
    font-size: 14px;
    padding: 5px;
    background-color: #4a4a4a;
    color: #fff;
    border-radius: 2px;
    margin-bottom: 10px;
  }
`;

const Photo = styled.div`
  width: 30%;
  & > img {
    width: 100%;
  }
`;
const CardButtonWrap = styled.ul`
  display: flex;
  & > li {
    padding-right: 5px;
    margin-top: 10px;
  }
  & > li > button {
    border: none;
    background-color: pink;
    font-size: 13px;
    padding: 2px 5px;
    border-radius: 4px;
    cursor: pointer;
    box-shadow: -1px -1px 3px #fff, 1px 1px 3px #babebc;
  }
  & > li > button.active {
    background-color: #fd8ba0;
    color: #fff;
    box-shadow: inset 1px 1px 2px #95535f, inset -1px -1px 2px #fff;
  }
`;

const ListArea = styled.div`
  font-size: 14px;
  margin-top: 10px;
  background: #fffefe;
  padding: 10px 10px;
  border-radius: 2px;
  border: 1px solid #dbbcd2b7;

  & > div:first-of-type {
    display: none;
  }
  & > div:first-of-type > p {
    margin-bottom: 5px;
  }
  & > div:first-of-type > p:last-of-type {
    margin-bottom: 0;
  }

  & > div:nth-of-type(2) > img {
    height: 18px;
    margin-right: 2px;
  }
`;

const MainCard = () => {
  const [activeTab, setActiveTab] = useState("edu");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <CardWrap>
      <div>
        <Photo>
          <img src={photo} alt="사진" />
        </Photo>
        <ul>
          <li>
            정체되지 않고 끊임없이 탐구하는 자세로 배우는 것을 두려워하지
            않겠습니다.
          </li>
          <li> • 심재은</li> <li> • 1997.02.22</li>
          <li>
            <CardButtonWrap>
              <li>
                <button
                  className={activeTab === "edu" ? "active" : ""}
                  onClick={() => handleTabClick("edu")}
                >
                  Education
                </button>
              </li>
              <li>
                <button
                  className={activeTab === "skill" ? "active" : ""}
                  onClick={() => handleTabClick("skill")}
                >
                  Skill
                </button>
              </li>
            </CardButtonWrap>
          </li>
          <ListArea>
            <div
              className="edu"
              style={{ display: activeTab === "edu" ? "block" : "none" }}
            >
              <p>2023.02 한림대학교 경영학과 졸업</p>
              <p>2023.04 웹디자인 기능사</p>
              <p>2023.05 더조은컴퓨터아트학원 UI/UX과정 수료</p>
              {/* <p>2024.03 코딩알려주는 누나 JS 스터디 수료</p>
              <p>2024.04 코딩알려주는 누나 React 스터디 수료</p> */}
            </div>

            <div
              className="skill"
              style={{ display: activeTab === "skill" ? "block" : "none" }}
            >
              {/* <FontAwesomeIcon icon={faJs} size="lg" /> */}
              <img
                src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"
                alt="html5"
              />
              <img
                src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"
                alt="css3"
              />
              <img
                src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"
                alt="javascript"
              />
              <img
                src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"
                alt="React"
              />

              <img
                src="https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white"
                alt="jquery"
              />
              <img
                src="https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white"
                alt="리액트 쿼리"
              />
              <img
                src="https://img.shields.io/badge/Zustand-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"
                alt="zustand"
              />
              <img
                src="https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white"
                alt="리덕스"
              />
              <img
                src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white"
                alt="Bootstrap"
              />
              <img
                src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"
                alt="styledComponent"
              />
              <img
                src="https://img.shields.io/badge/Scss-CC6699?style=for-the-badge&logo=sass&logoColor=white"
                alt="scss"
              />
              <img
                src="https://img.shields.io/badge/photoshop-%2331A8FF.svg?style=for-the-badge&logo=adobe%20photoshop&logoColor=white"
                alt="포토샵"
              />
              <img
                src="https://img.shields.io/badge/illustrator-%23FF9A00.svg?style=for-the-badge&logo=adobe%20illustrator&logoColor=white"
                alt="일러스트레이터"
              />
              <img
                src="https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white"
                alt="피그마"
              />
              <img
                src="https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white"
                alt="비트"
              />
              <img
                src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"
                alt="github"
              />
              <img
                src="https://img.shields.io/badge/VSCode-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white"
                alt="vscode"
              />
            </div>
          </ListArea>
        </ul>
      </div>
    </CardWrap>
  );
};

export default MainCard;
