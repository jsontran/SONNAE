import React from "react";
import styled from "styled-components";

const HomeContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;

  background-color: #fafafa;

`;

const SONNAE = styled.img`
  max-width: 110vw;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-54.5%, -50%);
`;

const Title = styled.p`
  font-family: NeutralFace;
  font-weight: bold;
  font-size: 2.5vw;
  text-align: right;
  color: #0a0a0a;
  margin: 0;
`;

const SubText = styled.p`
  font-family: AGaramondPro;
  font-size: 1.25vw;
  text-align: right;
  color: #0a0a0a;
  margin: 0;
`;

const TitleContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(118%, 500%);
`;

const Home = () => {
  return (
    <HomeContainer id="Home">
      <SONNAE src="./assets/SONNAE.png" />
      <TitleContainer>
        <Title>BY: Jason Tran</Title>
        <SubText>to be above the heavens</SubText>
      </TitleContainer>
    </HomeContainer>
  );
};

export default Home;
