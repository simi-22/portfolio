import React from "react";

import WorksItem from "../../component/worksComponent/WorksItem";
import MuvicImg from "../../assets/jsImg/muvic.jpg";
import Times from "../../assets/jsImg/times.jpg";
import todoList from "../../assets/jsImg/jstodo.jpg";
import random from "../../assets/jsImg/random.jpg";

const JsWorks = () => {
  return (
    <>
      <WorksItem
        image={MuvicImg}
        title="MUVIC"
        projectType="팀프로젝트"
        frontSkill="Html, Css, Javascript"
        Data="TMDB API, SpotifyAPI"
        projectAddress="https://muvic.netlify.app/"
        githubAddress="https://github.com/simi-22/group-23-api-project"
        tool="Github,Figma, Slack, Discord, Netlify, Trello"
        content="메인페이지(상단비주얼제외), 장르페이지, 서치페이지제작"
      />
      <WorksItem
        image={Times}
        title="뉴욕타임즈"
        projectType="개인프로젝트"
        frontSkill="Html, Css, Javascript"
        tool="Postman"
        Data="newscatcher API"
        projectAddress="https://simi-22.github.io/NewsApp/"
        githubAddress="https://github.com/simi-22/NewsApp"
      />
      <WorksItem
        image={todoList}
        title="TodoList"
        projectType="개인프로젝트"
        frontSkill="Html, Css, Javascript"
        projectAddress="https://simi-22.github.io/First-ToDoList/"
        githubAddress="https://github.com/simi-22/First-ToDoList"
      />
      <WorksItem
        image={random}
        title="랜덤숫자게임"
        projectType="개인프로젝트"
        frontSkill="Html, Css, Javascript"
        projectAddress="https://simi-22.github.io/RandomNumGame/"
        githubAddress="https://github.com/simi-22/RandomNumGame"
      />
    </>
  );
};

export default JsWorks;
