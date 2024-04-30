import React from "react";
import styled from "styled-components";
import netflix from "../assets/reactImg/netflix.png";
import shakeDrink from "../assets/reactImg/shakedrink.png";
import yes24 from "../assets/reactImg/yes24.png";
import weatherapi from "../assets/reactImg/weatherapi.png";
import reactTodo from "../assets/reactImg/reacttodo.png";

const ProjectContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  max-width: 1200px;
  padding-top: 80px;
  margin: 0 auto;
`;
const ProjectList = styled.li`
  & > div > img {
    width: 300px;
  }
`;
const ReactWorksPage = () => {
  return (
    <ProjectContainer>
      <ProjectList>
        <div>
          <img src={shakeDrink} alt="shake_drink" />
        </div>
        <div>
          <p>팀프로젝트</p>
          <div>shake_drink</div>
          <div>
            사용기술
            <p>
              Frontend: react, javascript, MUI, emotion, Zustand, React Query
            </p>
            <p>Backend: thecocktaildb</p>
          </div>
          <ul>
            <li>
              <a href="https://shake-drink.vercel.app/" target="_blank">
                웹사이트
              </a>
            </li>
            <li>
              <a href="https://github.com/simi-22/shake_drink" target="_blank">
                깃허브
              </a>
            </li>
          </ul>
        </div>
      </ProjectList>
      <ProjectList>
        <div>
          <img src={netflix} alt="넷플릭스" />
        </div>
        <div>
          <p>개인프로젝트</p>
          <div>넷플릭스</div>
          <div>
            사용기술
            <p>Frontend: react, javascript, bootstrap, React Query</p>
            <p>Backend: TMDB API</p>
          </div>
          <ul>
            <li>
              <a href="https://nmoviewebsite.netlify.app/" target="_blank">
                웹사이트
              </a>
            </li>
            <li>
              <a href="https://github.com/simi-22/Netflix" target="_blank">
                깃허브
              </a>
            </li>
          </ul>
        </div>
      </ProjectList>
      <ProjectList>
        <div>
          <img src={yes24} alt="예스24" />
        </div>
        <div>
          <p>개인프로젝트</p>
          <div>yes 24(도서쇼핑몰)</div>
          <div>
            사용기술
            <p>
              Frontend: react, javascript, react-redux/middleware, redux-toolkit
            </p>
            <p>Backend: my json server</p>
          </div>
          <ul>
            <li>
              <a href="https://booksmall.netlify.app/?q=" target="_blank">
                웹사이트
              </a>
            </li>
            <li>
              <a href="https://github.com/simi-22/shoppingmall" target="_blank">
                깃허브
              </a>
            </li>
          </ul>
        </div>
      </ProjectList>
      <ProjectList>
        <div>
          <img src={weatherapi} alt="날씨웹사이트" />
        </div>
        <div>
          <p>개인프로젝트</p>
          <div>Weather Web</div>
          <div>
            사용기술
            <p>Frontend: react, javascript</p>
            <p>Backend: openWeatherApi</p>
          </div>
          <ul>
            <li>
              <a href="https://weatherwebsun.netlify.app/">웹사이트</a>
            </li>
            <li>
              <a href="https://github.com/simi-22/weatherWeb">깃허브</a>
            </li>
          </ul>
        </div>
      </ProjectList>
      <ProjectList>
        <div>
          <img src={reactTodo} alt="리액트투두리스트" />
        </div>
        <div>
          <p>개인프로젝트</p>
          <div>TodoList</div>
          <div>
            사용기술
            <p>Frontend: react, javascript</p>
          </div>
          <ul>
            <li>
              <a href="https://simi-22.github.io/ReactTodo/">웹사이트</a>
            </li>
            <li>
              <a href="https://github.com/simi-22/ReactTodo">깃허브</a>
            </li>
          </ul>
        </div>
      </ProjectList>
      {/* <ProjectList>팀프로젝트: shake_drink</ProjectList>
      <ProjectList>개인프로젝트: 포트폴리오 사이트</ProjectList>
      <ProjectList>개인프로젝트: Netflix</ProjectList>
      <ProjectList>개인프로젝트: yes24</ProjectList>
      <ProjectList>개인프로젝트: 날씨api</ProjectList>
      <ProjectList>개인프로젝트: todolist</ProjectList> */}
    </ProjectContainer>
  );
};

export default ReactWorksPage;
