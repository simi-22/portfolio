import React from "react";
import styled from "styled-components";
import WorksItem from "../component/WorksItem.jsx";
import Rds from "../assets/publishingImg/rds.png";
import megabox from "../assets/publishingImg/megabox.png";
import millie from "../assets/publishingImg/milli.png";

const PublishingWorksPage = () => {
  return (
    <div>
      <ul>
        <WorksItem
          image={Rds}
          title="rds 클론코딩"
          projectType="팀프로젝트"
          frontSkill="html,css,jQuery"
          projectAddress="https://simi-22.github.io/rds/"
          githubAddress="https://github.com/simi-22/rds"
        />
        <WorksItem
          image={megabox}
          title="메가박스 클론코딩"
          projectType="팀프로젝트"
          frontSkill="html,css"
          projectAddress="https://simi-22.github.io/megabox/"
          githubAddress="https://github.com/simi-22/megabox"
        />
        <WorksItem
          image={millie}
          title="밀리의서재 클론코딩"
          projectType="개인프로젝트"
          frontSkill="html,css,javascript"
          projectAddress="https://simi-22.github.io/millie-web/main"
          githubAddress="https://github.com/simi-22/millie-web"
        />
      </ul>
    </div>
  );
};

export default PublishingWorksPage;
