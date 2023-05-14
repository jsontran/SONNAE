import React from "react";
import styled from "styled-components";

const HomeContainer = styled.div`
  width: 100vw;
  height: fit-content;

  display: flex;
  flex-direction: column;

  background-color: #fafafa;
`;

const SectionWrapper = styled.div``;

const SON = styled.img`
  max-width: 100vw;
  max-height: 90vh;
  width: fit-content;
  float: right;
`;
const NAE = styled.img`
  max-width: 100vw;
  max-height: 90vh;
  width: fit-content;
  margin-top: 10vh;
`;

const Home = () => {
  return (
    <HomeContainer id="Home">
      <div>
        <SON src="./assets/SON.png" />
      </div>
      <SectionWrapper>
        <NAE src="./assets/NAE.png" />
      </SectionWrapper>
    </HomeContainer>
  );
};

export default Home;
