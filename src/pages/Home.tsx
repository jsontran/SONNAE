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

const Title = styled.p`
  position: absolute;
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

const Home = () => {
  return (
    <HomeContainer id="Home">
      <Title>Jason Tran</Title>
    </HomeContainer>
  );
};

export default Home;
