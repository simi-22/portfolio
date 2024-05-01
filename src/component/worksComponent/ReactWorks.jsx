import React from "react";
import styled from "styled-components";
import netflix from "../../assets/reactImg/netflix.png";
import shakeDrink from "../../assets/reactImg/shakedrink.png";
import portfolio from "../../assets/reactImg/portfolio.png";
import yes24 from "../../assets/reactImg/yes24.png";
import weatherapi from "../../assets/reactImg/weatherapi.png";
import reactTodo from "../../assets/reactImg/reacttodo.png";
import WorksItem from "../../component/worksComponent/WorksItem";

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

const ReactWorks = () => {
  return (
    <ProjectContainer>
      <WorksItem
        image={shakeDrink}
        title="shake_drink"
        projectType="팀프로젝트"
        frontSkill="React, Javascript, MUI, Emotion, Zustand, ReactQuery"
        backSkill="thecocktaildb"
        projectAddress="https://shake-drink.vercel.app/"
        githubAddress="https://github.com/simi-22/shake_drink"
        tool="Github,Figma, Notion, Slack, Discord, Netlify"
        content="메인페이지, 로그인 페이지 제작"
      />
      <WorksItem
        image={netflix}
        title="넷플릭스"
        projectType="개인프로젝트"
        frontSkill="React, Javascript, Bootstrap, React Query"
        backSkill="TMDB API"
        projectAddress="https://nmoviewebsite.netlify.app/"
        githubAddress="https://github.com/simi-22/Netflix"
      />
      <WorksItem
        image={portfolio}
        title="포트폴리오사이트"
        projectType="개인프로젝트"
        frontSkill="React, Javascript, Zustand, ReactRouter, Styled-Component"
        projectAddress="https://shake-drink.vercel.app/"
        githubAddress="https://github.com/simi-22/shake_drink"
      />
      <WorksItem
        image={yes24}
        title="yes 24(도서쇼핑몰)"
        projectType="개인프로젝트"
        frontSkill="React, Javascript, React-redux/middleware, Redux-toolkit"
        backSkill="my json server"
        projectAddress="https://booksmall.netlify.app/?q="
        githubAddress="https://github.com/simi-22/shoppingmall"
      />
      <WorksItem
        image={weatherapi}
        title="날씨웹사이트"
        projectType="개인프로젝트"
        frontSkill="React, Javascript"
        backSkill="openWeatherApi"
        projectAddress="https://weatherwebsun.netlify.app/"
        githubAddress="https://github.com/simi-22/weatherWeb"
      />
      <WorksItem
        image={reactTodo}
        title="TodoList"
        projectType="개인프로젝트"
        frontSkill="React, Javascript"
        projectAddress="https://simi-22.github.io/ReactTodo/"
        githubAddress="https://github.com/simi-22/ReactTodo"
      />
    </ProjectContainer>
  );
};

export default ReactWorks;
