import React from "react";
import MainCard from "../component/MainCard";
import MainButton from "../component/MainButton";
import styled from "styled-components";

const HomePageContainer = styled.div`
  display: flex;
  height: calc(100vh - 80px);
  padding: 0 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
