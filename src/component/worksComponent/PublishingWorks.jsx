import React from "react";
import styled from "styled-components";
import WorksItem from "../../component/worksComponent/WorksItem.jsx";
import Rds from "../../assets/publishingImg/rds.png";
import megabox from "../../assets/publishingImg/megabox.png";
import millie from "../../assets/publishingImg/millie.png";

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
const PublishingWorks = () => {
  return (
    <ProjectContainer>
      <WorksItem
        image={Rds}
        title="RDS 클론코딩"
        projectType="팀프로젝트"
        frontSkill="Html, Css, jQuery, Bootstrap"
        projectAddress="https://simi-22.github.io/rds/"
        githubAddress="https://github.com/simi-22/rds"
        content="bootstrap을 이용한 slider와 아래부분 제작(about company)"
      />
      <WorksItem
        image={megabox}
        title="메가박스 클론코딩"
        projectType="팀프로젝트"
        frontSkill="Html, Css, Swiper.js"
        projectAddress="https://simi-22.github.io/megabox/"
        githubAddress="https://github.com/simi-22/megabox"
        content="Header, 박스오피스 제작(비반응형)"
      />
      <WorksItem
        image={millie}
        title="밀리의서재 클론코딩"
        projectType="개인프로젝트"
        frontSkill="Html, Css, Javascript"
        projectAddress="https://simi-22.github.io/millie-web/main"
        githubAddress="https://github.com/simi-22/millie-web"
      />
    </ProjectContainer>
  );
};

export default PublishingWorks;
