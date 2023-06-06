import React from "react";
import styled, { keyframes } from "styled-components";

const ProjectsContainer = styled.div`
  width: 100vw;
  height: 110%;
  display: flex;
  justify-content: center;
  background-color: #fafafa;
  margin-top: 9.75rem;
  padding-top: 0.25rem;
`;

const ProjCard = styled.div`
  width: 20rem;
  height: 30rem;
  z-index: 1;
  margin: min(15vw, 16rem) 1rem;
  border-radius: 1rem;
  
  background-color: #fafafa10;
  border: 1px solid rgba(0, 0, 0, 0.2);

  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);

  transition: all 1s ease;

  &:hover {
      transform: scale(1.05) translateY(-0rem);
      box-shadow: 0px 5px 10px 0px #00000020;
  }
`;
const ProjTitle = styled.div``;
const ProjDesc = styled.div``;
const Title = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TitleLetters = styled.span`
  font-size: min(12vw, 13rem);
  font-family: NeutralFace;
  font-weight: bold;
  letter-spacing: 3.5vw;
  user-select: none;

  display: inline-block;
  vertical-align: middle;

  color: #fafafa;
  text-shadow: -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black,
    1px 1px 0 black;
  transition: all 0.1s ease-in;
  &:hover {
    font-size: min(11.5vw, 12rem);
  }
`;

type TitleLayerProps = {
  index: number;
};

const iterateLetters = (index: number) => {
  let styles = "";
  let j = index;
  for (let i = 1; i <= 6; i++) {
    if (j > 5) {
      j -= 5;
    }
    styles += `
    ${TitleLetters}{
        animation:  flicker 10s infinite;
        animation-delay: ${index * 2}s;
        opacity:${(6 - index) * 0.2 - 0.09}
      }
    `;
    j++;
  }
  console.log(`${styles}}`);
  return `${styles}`;
};

const TitleLayer = styled.div<TitleLayerProps>`
  ${(p) => iterateLetters(p.index)}
  text-align: center;
  margin-left: 2.5vw;

  @keyframes flicker {
    0% {
      color: #fafafa;
    }
    2% {
      color: black;
    }
    18% {
      color: black;
    }
    20% {
      color: #fafafa;
    }
  }
`;

const titleLetters = ["P", "R", "O", "J", "E", "C", "T", "S"];
const TitleLayers = ({ index }: TitleLayerProps) => {
  return (
    <TitleLayer index={index}>
      {titleLetters.map((item) => (
        <TitleLetters>{item}</TitleLetters>
      ))}
    </TitleLayer>
  );
};

type ProjectCardProps = {
  title: string;
  desc: string;
  img: string;
};

const ProjCards = ({ title, desc, img }: ProjectCardProps) => {
  return (
    <ProjCard>
      <ProjTitle>{title}</ProjTitle>
      <ProjDesc>{desc}</ProjDesc>
    </ProjCard>
  );
};

const Projects = () => {
  return (
    <ProjectsContainer id="Projects">
      <Title>
        <TitleLayers index={1} />
        <TitleLayers index={2} />
        <TitleLayers index={3} />
        <TitleLayers index={4} />
        <TitleLayers index={5} />
      </Title>
      <ProjCards title={""} desc={""} img={""} />
      <ProjCards title={""} desc={""} img={""} />
      <ProjCards title={""} desc={""} img={""} />
      <ProjCards title={""} desc={""} img={""} />
    </ProjectsContainer>
  );
};

export default Projects;
