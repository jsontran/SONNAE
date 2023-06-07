import React from "react";
import styled, { keyframes } from "styled-components";

const ProjectsContainer = styled.div`
  width: 100vw;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fafafa;
  margin-top: 9.75rem;
  padding-top: 0.25rem;
`;

const Cards = styled.div`
  width: min(80%, 86rem);
  display: flex;
  flex-direction: column;
  margin-top: min(14vw, 15rem);
  margin-bottom: min(14vw, 15rem);
`;

const ProjCard = styled.div`
  z-index: 1;
  margin: 0.5rem 0.5rem;
  border-radius: 1rem;

  background-color: #fafafa10;
  border: 1px solid rgba(0, 0, 0, 0.2);

  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);

  transition: 0.25s ease;
  &:hover {
    box-shadow: 0px 5px 10px 0px #00000020;
    z-index: 100;
  }
`;

const VProjCard = styled(ProjCard)`
  width: 35%;
  height: 25rem;
  &:hover {
    transform: scale(1.05);
  }
`;
const HProjCard = styled(ProjCard)`
  width: 65%;
  height: 25rem;
  &:hover {
    transform: scaleX(1.027) scaleY(1.05);
  }
`;

const LandProjCard = styled(ProjCard)`
  width: calc(100%-0.5rem);
  height: 25rem;
  &:hover {
    transform: scale(1.05);
  }
`;

const PairProjCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
  letter-spacing: min(2.5vw, 2.5rem);
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
        animation:  flicker 8s infinite;
        animation-delay: ${index * 1}s;
        opacity:${(9 - index) * 0.15 - 0.09}
      }
    `;
    j++;
  }
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
    10% {
      color: black;
    }
    12% {
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
  type: string;
  mode?: boolean;
  title: string;
  desc: string;
  img: string;
};

const ProjCards = ({ type, mode, title, desc, img }: ProjectCardProps) => {
  return (
    <>
      {type === "PAIR" ? (
        mode ? (
          <PairProjCard>
            <HProjCard>
              <ProjTitle>{title}</ProjTitle>
              <ProjDesc>{desc}</ProjDesc>
            </HProjCard>
            <VProjCard>
              <ProjTitle>{title}</ProjTitle>
              <ProjDesc>{desc}</ProjDesc>
            </VProjCard>
          </PairProjCard>
        ) : (
          <PairProjCard>
            <VProjCard>
              <ProjTitle>{title}</ProjTitle>
              <ProjDesc>{desc}</ProjDesc>
            </VProjCard>
            <HProjCard>
              <ProjTitle>{title}</ProjTitle>
              <ProjDesc>{desc}</ProjDesc>
            </HProjCard>
          </PairProjCard>
        )
      ) : (
        <LandProjCard>
          <ProjTitle>{title}</ProjTitle>
          <ProjDesc>{desc}</ProjDesc>
        </LandProjCard>
      )}
    </>
  );
};
const indices = [1, 2, 3, 4, 5, 6, 7, 8];
const Projects = () => {
  return (
    <ProjectsContainer id="Projects">
      <Title>
        {indices.map((index) => (
          <TitleLayers index={index} />
        ))}
      </Title>
      <Cards>
        <ProjCards type={"PAIR"} mode={false} title={""} desc={""} img={""} />
        <ProjCards type={"PAIR"} mode={true} title={""} desc={""} img={""} />
        <ProjCards type={"LAND"} title={""} desc={""} img={""} />
      </Cards>
    </ProjectsContainer>
  );
};

export default Projects;
