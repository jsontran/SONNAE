import React from "react";
import styled from "styled-components";
import ThreeDModel from "../components/Landing";

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
  position: absolute;
  /* width: 100%; */
  top: 15%;
  left: 0%;
  margin: 0;
  font-family: NeutralFace;
  font-weight: bold;
  font-size: max(24vw, 1.75rem);
  letter-spacing: 0.25rem;
  text-align: center;

  color: #000000;
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
    <>
      <HomeContainer id="Home">
        <Title>Jason Tran</Title>
        <TitleContainer>
          {/* <SubText>based in Canada; currently in orbit.</SubText> */}
        </TitleContainer>
      </HomeContainer>
      <ThreeDModel />
    </>
  );
};

export default Home;
