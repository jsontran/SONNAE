import React from "react";
import styled from "styled-components";

const AboutContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  background-color: #fafafa;
`;

const AboutCard = styled.div`
  width: 70vw;
  display: flex;
  justify-content: space-between;
`;

const PictureCard = styled.img`
  width: 40%;
  height: 100%;
  border-radius: 1rem;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 10px 0px 15px -10px #00000094;
`;

const AboutText = styled.div`
  font-size: 1.25rem;
  font-family: Archia;

  margin: 0 1rem 0 1rem;
  padding: 2rem;
  z-index: -1;

  border-radius: 1rem;
  background: rgb(250, 250, 250);
  background: linear-gradient(
    180deg,
    rgba(250, 250, 250, 0.80) 40%,
    rgba(18, 18, 18, 0) 100%
  );

  box-shadow: 0px 0px 10px 0px #0000001e;
  border: 1px solid rgba(0, 0, 0, 0.2);

  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
`;

const NameSliderContainer = styled.div`
  max-width: 100%;
  margin-bottom: 10vw;
  z-index: 0;
`;

const NameSlider = styled.div`
  font-family: NeutralFace;
  font-size: 20vh;
  display: inline-block;

  overflow: visible;
  white-space: nowrap;
  animation: slide 30s linear infinite;

  p {
    display: inline-block;
    margin: 0 0rem 0 0;
    color: #1e1d1d;
    transform: scale(0.95, 2);
  }

  @keyframes slide {
    0% {
      transform: translate3d(0, 0, 0);
    }
    100% {
      transform: translate3d(-50%, 0, 0);
    }
  }
`;

const CardContainer = styled.div`
  width: fit-content;
  height: fit-content;
  top: 50%;
  left: 50%;
  margin: 6vw auto -2vw auto;
  z-index: 100;
`;

const Header = styled.p`
  font-family: NeutralFace;
  font-weight: bold;
  font-size: 8rem;
  letter-spacing: 0.25rem;

  position: relative;
  margin: 0 0 -1.75vw 0.5vw;
  z-index: -1;

  color: #fafafa;
  text-shadow: -1px -1px 0 #1e1d1d, 1px -1px 0 #1e1d1d, -1px 1px 0 #1e1d1d,
    1px 1px 0 #1e1d1d;
`;

const About = () => {
  return (
    <AboutContainer id="About">
      <CardContainer>
        <Header>WHO AM I?</Header>
        <AboutCard>
          <PictureCard src="./assets/pfp.jpg" />
          <AboutText>
            Currently, I am a third year Software Engineering (Co-op) student at
            McMaster University, located in Hamilton, Ontario, Canada. Apart
            from what I am studying in my curriculum, I am extending my current
            knowledge by teaching myself front-end web development. In the
            future, I wish to explore the development of full-stack web
            development. Furthermore, as time becomes more valuable, I also wish
            to explore technologies that can provide opportunities to the world
            that can create an efficient and innovative use of time.
          </AboutText>
        </AboutCard>
      </CardContainer>

      <NameSliderContainer>
        <NameSlider>
          <p>JASON "SONNAE" TRAN. </p>
          <p>JASON "SONNAE" TRAN. </p>
        </NameSlider>
      </NameSliderContainer>
    </AboutContainer>
  );
};

export default About;
