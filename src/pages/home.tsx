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
  animation: floater 5s infinite;
  @keyframes floater {
    0% {
      transform: scale(0.9) translate(-56.5%, -50%);
      transform: translate(-54.5%, -50%);
      transition: ease 0.5s;
    }
    50% {
      transform: scale(1.02) translate(-53.5%, -49%);
      transition: ease 0.5s;
    }
  }
`;

const Title = styled.p`
  width: 100%;
  font-family: NeutralFace;
  font-weight: bold;
  font-size: 2.5vw;
  color: #0a0a0a;
  margin: 0;
  letter-spacing: 0.25rem;
`;

const SubText = styled.p`
  font-family: AGaramondPro;
  font-size: 1vw;
  text-align: right;
  color: #0a0a0a;
  margin: 0;
`;

const TitleContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(140%, 500%);
`;

const Home = () => {
  return (
    <HomeContainer id="Home">
      <SONNAE src="./assets/SONNAE.png" />
      <TitleContainer>
        <Title>Jason Tran</Title>
        <SubText>based in Canada; currently in orbit.</SubText>
      </TitleContainer>
    </HomeContainer>
  );
};

export default Home;
