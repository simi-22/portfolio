import React from "react";

import netflix from "../../assets/reactImg/netflix.jpg";
import shakeDrink from "../../assets/reactImg/shakedrink.jpg";
import portfolio from "../../assets/reactImg/portfolio.jpg";
import yes24 from "../../assets/reactImg/yes24.jpg";
import weatherapi from "../../assets/reactImg/weatherapi.jpg";
import reactTodo from "../../assets/reactImg/reacttodo.jpg";
import WorksItem from "../../component/worksComponent/WorksItem";

const ReactWorks = () => {
  return (
    <>
      <WorksItem
        image={shakeDrink}
        title="shake_drink"
        projectType="팀프로젝트"
        frontSkill="React, Javascript, MUI, Emotion, Zustand, ReactQuery"
        Data="thecocktaildb"
        projectAddress="https://shake-drink.vercel.app/"
        githubAddress="https://github.com/simi-22/shake_drink"
        tool="Github,Figma, Notion, Slack, Discord, Netlify"
        content="메인페이지, 로그인 페이지 제작"
      />
      <WorksItem
        image={netflix}
        title="넷플릭스"
        projectType="개인프로젝트"
        frontSkill="React, Javascript, React Query, Slick-Slider, Bootstrap, "
        Data="TMDB API"
        projectAddress="https://nmoviewebsite.netlify.app/"
        githubAddress="https://github.com/simi-22/Netflix"
        content="React-Router페이지구현, React Query로 Api관리"
      />
      <WorksItem
        image={portfolio}
        title="포트폴리오사이트"
        projectType="개인프로젝트"
        frontSkill="React, Javascript, Zustand, ReactRouter, Styled-Components"
        projectAddress="https://shake-drink.vercel.app/"
        githubAddress="https://github.com/simi-22/shake_drink"
      />
      <WorksItem
        image={yes24}
        title="yes 24(도서쇼핑몰)"
        projectType="개인프로젝트"
        frontSkill="React, Javascript, React-redux/middleware, Redux-toolkit"
        Data="My json server"
        projectAddress="https://booksmall.netlify.app/?q="
        githubAddress="https://github.com/simi-22/shoppingmall"
      />
      <WorksItem
        image={weatherapi}
        title="날씨웹사이트"
        projectType="개인프로젝트"
        frontSkill="React, Javascript"
        Data="openWeatherApi"
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
    </>
  );
};

export default ReactWorks;
