import React from "react";
import styled, { css } from "styled-components";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const AboutContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #fafafa;
  padding-top: 12vh;
`;

const CardContainer = styled.div`
  width: min(67vw, 73rem);
  /* height: calc(min(67vw, 73rem) * 0.4); */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  top: 50%;
  left: 50%;
  margin: 6vw auto -2vw auto;
  z-index: 100;

  @media (max-width: 1536px) and (min-width: 768px) {
    width: 75vw;
  }
  @media (max-width: 1366px) and (min-width: 768px) {
    width: 85vw;
  }
  @media (max-width: 1024px) and (min-width: 768px) {
    width: 95vw;
  }


  @media (max-width: 600px){
    width: 90vw;
  }

  @media (min-height: 100vw) and (max-width: 768px), (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PictureCard = styled.img`
  width: 40%;
  border-radius: 1rem;
  border: 1px solid rgba(0, 0, 0, 0.2);
  object-fit: cover;

  @media (min-height: 100vw) and (max-width: 768px), (max-width: 768px) {
    width: 67%;
  }
`;

const AboutText = styled.div`
  font-size: 1.25rem;
  font-family: Archia;

  margin: 0 0 0.5rem 1rem;
  padding: 2rem;
  z-index: -1;

  border-radius: 1rem;
  background: rgb(250, 250, 250);
  background: linear-gradient(
    180deg,
    rgba(250, 250, 250, 0.9) 40%,
    rgba(250, 250, 250, 0.6) 100%
  );

  box-shadow: 0px 0px 10px 0px #0000001e;
  border: 1px solid rgba(0, 0, 0, 0.2);

  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);

  @media (min-height: 100vw) and (max-width: 768px), (max-width: 768px) {
    margin: 0 0 0.5rem 0;
    font-size: 0.8rem;
  }
`;

const ContactContainer = styled.div`
  width: fit-content;
  padding: 0.5rem 0 0.25rem 1rem;
  margin: 0 0 0 1rem;

  border-radius: 1rem;
  background: rgb(250, 250, 250);
  background: linear-gradient(
    180deg,
    rgba(250, 250, 250, 0.9) 40%,
    rgba(250, 250, 250, 0.6) 100%
  );

  box-shadow: 0px 0px 10px 0px #0000001e;
  border: 1px solid rgba(0, 0, 0, 0.2);

  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);

  @media (min-height: 100vw) and (max-width: 768px), (max-width: 768px) {
    margin: 0;
  }
`;

const Icon = css`
  width: 2.5rem !important;
  height: 2.5rem !important;
  color: #505050;
  margin-right: 1rem;
  cursor: pointer;
  &:hover {
    color: #1e1d1d;
  }
`;

const ContactIcon = styled.a`
  ${Icon}
`;

const Email = styled(ContactIcon)``;

const Linkedin = styled(ContactIcon)``;

const Github = styled(ContactIcon)`
  transform: scale(0.9);
`;

const NameSliderContainer = styled.div`
  max-width: 100%;
  margin-bottom: 10vw;
  z-index: 0;

  @media (min-height: 100vw) and (max-width: 768px), (max-width: 768px) {
    margin-top: -65vh;
  }
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
    margin: 0;
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

  @media (min-height: 100vw) and (max-width: 768px), (max-width: 768px) {
    /* margin-top: -20vw; */
  }
`;

const Title = styled.p`
  width: fit-content;
  font-family: NeutralFace;
  font-weight: bold;
  font-size: min(5vw, 5rem);
  letter-spacing: 0.25rem;

  position: relative;
  margin: 0 0 0 1vw;
  z-index: -1;

  color: #fafafa;
  text-shadow: -1px -1px 0 #1e1d1d, 1px -1px 0 #1e1d1d, -1px 1px 0 #1e1d1d,
    1px 1px 0 #1e1d1d;

  @media (min-height: 100vw) and (max-width: 768px), (max-width: 768px) {
    margin: 0.5rem 0;
  }
`;

const About = () => {
  const handleLink = (link: string) => {
    window.open(link);
  };

  return (
    <AboutContainer id="About">
      <CardContainer>
        <PictureCard src="./assets/pfp.jpg" />
        <InfoContainer>
          <Title>WHO AM I?</Title>
          <AboutText>
            Currently, I am a third year Software Engineering (Co-op) student at
            McMaster University.
            <br />
            <br />
            Apart from what I am studying in my curriculum, I am extending my
            current knowledge by teaching myself front-end web development. In
            the future, I wish to explore the development of full-stack web
            development. Furthermore, as time becomes more valuable, I also wish
            to explore technologies that can provide opportunities to the world
            that can create an efficient and innovative use of time.
          </AboutText>
          <ContactContainer>
            <Email
              as={EmailIcon}
              onClick={() => handleLink("jjsontran@gmail.com")}
            />
            <Linkedin
              as={LinkedInIcon}
              onClick={() =>
                handleLink("https://www.linkedin.com/in/jsontran/")
              }
            />
            <Github
              as={GitHubIcon}
              onClick={() => handleLink("https://github.com/jsontran")}
            />
          </ContactContainer>
        </InfoContainer>
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
