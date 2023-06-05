import React from "react";
import styled, { keyframes } from "styled-components";

const ProjectsContainer = styled.div`
  width: 100vw;
  height: fit-content;
  display: flex;
  justify-content: center;
  background-color: #fafafa;
`;

const ProjectCard = styled.div``;
const ProjTitle = styled.div``;
const ProjDesc = styled.div``;
const Title = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const TitleLetters = styled.span`
  font-size: 15vw;
  font-family: NeutralFace;
  font-weight: bold;
  letter-spacing: 1.5vw;
  user-select: none;

  color: #fafafa;
  text-shadow: -1px -1px 0 #1e1d1d, 1px -1px 0 #1e1d1d, -1px 1px 0 #1e1d1d,
    1px 1px 0 #1e1d1d;
  transition: all 1s ease;
  &:hover {
    font-size: 14.5vw;
  }
`;

type TitleLayerProps = {
  index: number;
};

const flickerAnimation = `
0% {
  opacity: 0;
}
100% {
  opacity: 1;
}
`;

const iterateLetters = (index: number) => {
  let styles = "";
  let j = index;
  for (let i = 1; i <= 5; i++) {
    if (j > 4) {
      j -= 4;
    }
    styles += `
    ${TitleLetters}:nth-child(${j}) {
        animation:  flicker 12s infinite;
        animation-delay: ${i * 3 - 3}s;
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

  @keyframes flicker {
    0% {
      color: #1e1d1d;
    }
    24% {
      color: #1e1d1d;
    }
    25% {
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
      </Title>
      <ProjectCards title={""} desc={""} img={""} />
      <ProjectCards title={""} desc={""} img={""} />
      <ProjectCards title={""} desc={""} img={""} />
      <ProjectCards title={""} desc={""} img={""} />
    </ProjectsContainer>
  );
};

export default Projects;
