import React from "react";
import MainCard from "../component/mainComponent/MainCard";
import MainButton from "../component/mainComponent/MainButton";
import styled from "styled-components";

const HomePageContainer = styled.div`
  display: flex;
  height: calc(100vh - 80px);
  padding: 0 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 630px) {
    height: calc(100vh - 100px);
    justify-content: start;
    margin-top: 20px;
  }
`;
const HomePage = () => {
  return (
    <HomePageContainer>
      <MainCard />
      <MainButton />
    </HomePageContainer>
  );
};

export default HomePage;
