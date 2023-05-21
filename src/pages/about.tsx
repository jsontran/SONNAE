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

  top: 50%;
  left: 50%;
  margin: 12vw auto -5vw auto;
  z-index: 1;
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

  margin: 0 1rem 0 -2rem;
  padding: 1rem 1rem 1rem 3rem;
  z-index: -1;

  border-radius: 1rem;
  box-shadow: 0px 0px 10px 0px #0000001e;
  border: 1px solid rgba(0, 0, 0, 0.2);

  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);

  transition: all ease 0.3s;
`;

const NameSliderContainer = styled.div`
  max-width: 100%;
  margin-bottom: 15vw;
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
    margin: 0 10rem 0 0;
    color: #1e1d1d;
    transform: scale(1, 2);
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

const About = () => {
  return (
    <AboutContainer id="About">
      <AboutCard>
        <PictureCard src="./assets/pfp.jpg" />
        <AboutText>
          ABOUT: <br />
          <br />
          Currently, I am a third year Software Engineering (Co-op) student at
          McMaster University, located in Hamilton, Ontario, Canada. Apart from
          what I am studying in my curriculum, I am extending my current
          knowledge by teaching myself front-end web development. In the future,
          I wish to explore the development of full-stack web development.
          Furthermore, as time becomes more valuable, I also wish to explore
          technologies that can provide opportunities to the world that can
          create an efficient and innovative use of time.
        </AboutText>
      </AboutCard>
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
