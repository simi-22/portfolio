import React from "react";

import WorksItem from "../../component/worksComponent/WorksItem.jsx";
import Rds from "../../assets/publishingImg/rds.jpg";
import megabox from "../../assets/publishingImg/megabox.jpg";
import millie from "../../assets/publishingImg/millie.jpg";

const PublishingWorks = () => {
  return (
    <>
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
    </>
  );
};

export default PublishingWorks;
