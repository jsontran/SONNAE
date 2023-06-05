import React from "react";
import styled, { keyframes } from "styled-components";

const ProjectsContainer = styled.div`
  width: 100vw;
  height: 110%;
  display: flex;
  justify-content: center;
  background-color: #fafafa;
`;

const ProjectCard = styled.div``;
const ProjTitle = styled.div``;
const ProjDesc = styled.div``;
const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TitleLetters = styled.span`
  font-size: 12vw;
  font-family: NeutralFace;
  font-weight: bold;
  letter-spacing: 3vw;
  user-select: none;

  color: #fafafa;
  text-shadow: -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black,
    1px 1px 0 black;
  transition: all 0.25s ease-in;
  &:hover {
    font-size: 11.5vw;
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

  opacity:${(6-index)*0.2}
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
  margin-left: 2vw;

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


const titleLetters = ["PR", "OJ", "EC", "TS"];
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

const ProjectCards = ({ title, desc, img }: ProjectCardProps) => {
  return (
    <ProjectCard>
      <ProjTitle>{title}</ProjTitle>
      <ProjDesc>{desc}</ProjDesc>
    </ProjectCard>
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
      <ProjectCards title={""} desc={""} img={""} />
      <ProjectCards title={""} desc={""} img={""} />
      <ProjectCards title={""} desc={""} img={""} />
      <ProjectCards title={""} desc={""} img={""} />
    </ProjectsContainer>
  );
};

export default Projects;
