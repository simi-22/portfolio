import React from "react";
import styled from "styled-components";
import netflix from "../assets/reactImg/netflix.png";
import shakeDrink from "../assets/reactImg/shakedrink.png";
import yes24 from "../assets/reactImg/yes24.png";
import weatherapi from "../assets/reactImg/weatherapi.png";
import reactTodo from "../assets/reactImg/reacttodo.png";
import WorksItem from "../component/WorksItem.jsx";

const ProjectContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  max-width: 1000px;
  padding-top: 80px;
  margin: 0 auto;
`;

const ReactWorksPage = () => {
  return (
    <ProjectContainer>
      <WorksItem
        image={shakeDrink}
        title="shake_drink"
        projectType="팀프로젝트"
        frontSkill="react, javascript, MUI, emotion, Zustand, ReactQuery"
        backSkill="thecocktaildb"
        projectAddress="https://shake-drink.vercel.app/"
        githubAddress="https://github.com/simi-22/shake_drink"
      />
      <WorksItem
        image={netflix}
        title="넷플릭스"
        projectType="개인프로젝트"
        frontSkill="react, javascript, bootstrap, React Query"
        backSkill="TMDB API"
        projectAddress="https://nmoviewebsite.netlify.app/"
        githubAddress="https://github.com/simi-22/Netflix"
      />
      <WorksItem
        image={yes24}
        title="yes 24(도서쇼핑몰)"
        projectType="개인프로젝트"
        frontSkill="react, javascript, react-redux/middleware, redux-toolkit"
        backSkill="my json server"
        projectAddress="https://booksmall.netlify.app/?q="
        githubAddress="https://github.com/simi-22/shoppingmall"
      />
      <WorksItem
        image={weatherapi}
        title="날씨웹사이트"
        projectType="개인프로젝트"
        frontSkill="react, javascript"
        backSkill="openWeatherApi"
        projectAddress="https://weatherwebsun.netlify.app/"
        githubAddress="https://github.com/simi-22/weatherWeb"
      />
      <WorksItem
        image={reactTodo}
        title="TodoList"
        projectType="개인프로젝트"
        frontSkill="react, javascript"
        projectAddress="https://simi-22.github.io/ReactTodo/"
        githubAddress="https://github.com/simi-22/ReactTodo"
      />
    </ProjectContainer>
  );
};

export default ReactWorksPage;
