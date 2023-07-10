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
  max-width: 110%;
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-54.5%, -50%);
  animation: floater 5s infinite;

  @-webkit-keyframes floater {
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
  margin: 0;
  font-family: NeutralFace;
  font-weight: bold;
  font-size: max(2.5vw, 1.75rem);
  letter-spacing: 0.25rem;

  color: #0a0a0a;
  text-shadow: -1px -1px 0 #fafafa, 1px -1px 0 #fafafa, -1px 1px 0 #fafafa,
    1px 1px 0 #fafafa;
`;

const SubText = styled.p`
  font-family: AGaramondPro;
  font-size: max(1vw, 0.8rem);
  text-align: right;
  color: #0a0a0a;
  margin: 0;
`;

const TitleContainer = styled.div`
  position: absolute;
  bottom: 8vh;
  right: 2.5vw;
  @media (min-height: 100vw) {
    bottom: calc(20vh + (20vh - 10vw));
  }
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
