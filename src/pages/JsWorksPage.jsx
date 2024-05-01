import React from "react";
import styled from "styled-components";
import WorksItem from "../component/WorksItem.jsx";
import MuvicImg from "../assets/jsImg/muvic.png";
import Times from "../assets/jsImg/times.png";
import todoList from "../assets/jsImg/jstodo.png";
import random from "../assets/jsImg/random.png";

const JsWorksPage = () => {
  return (
    <div>
      <ul>
        <WorksItem
          image={MuvicImg}
          title="MUVIC"
          projectType="팀프로젝트"
          frontSkill="html,css,javascript"
          backSkill="TMDB API"
          projectAddress="https://muvic.netlify.app/"
          githubAddress="https://github.com/simi-22/group-23-api-project"
        />
        <WorksItem
          image={Times}
          title="뉴욕타임즈"
          projectType="개인프로젝트"
          frontSkill="html,css,javascript,postman"
          backSkill="newscatcher API"
          projectAddress="https://simi-22.github.io/NewsApp/"
          githubAddress="https://github.com/simi-22/NewsApp"
        />
        <WorksItem
          image={todoList}
          title="TodoList"
          projectType="개인프로젝트"
          frontSkill="html,css,javascript"
          projectAddress="https://simi-22.github.io/First-ToDoList/"
          githubAddress="https://github.com/simi-22/First-ToDoList"
        />
        <WorksItem
          image={random}
          title="랜덤숫자게임"
          projectType="개인프로젝트"
          frontSkill="html,css,javascript"
          projectAddress="https://simi-22.github.io/RandomNumGame/"
          githubAddress="https://github.com/simi-22/RandomNumGame"
        />
      </ul>
    </div>
  );
};

export default JsWorksPage;
