import React from "react";
import styled, { keyframes } from "styled-components";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const ProjectsContainer = styled.div`
  width: 100vw;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fafafa;
  margin-top: 8rem;
  padding-top: 2rem;
`;

const ProjCards = styled.div`
  width: min(70%, 86rem);
  display: flex;
  flex-direction: column;
  margin-top: min(14vw, 15rem);
  margin-bottom: min(14vw, 15rem);
  cursor: pointer;
`;

const ProjImg = styled.img`
  position: absolute;
  object-fit: cover;
  float: right;
  width: 100%;
  height: 100%;
  mask-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.85) 40%,
    rgba(0, 0, 0, 0) 120%
  );
  transform: scale(1.01);
  transition: 0.25s all ease;
`;

const ProjCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0 1rem 0;
  overflow: hidden;
  opacity: 98%;

  z-index: 1;
  margin: 0.5rem 0.5rem;
  border-radius: 1rem;
  background: rgb(250, 250, 250);
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 1) 60%
  );
  border: 1px solid rgba(255, 255, 255, 0.8);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(5px);
  transition: 0.25s all ease;
  &:hover {
    box-shadow: 0px 5px 10px 0px #ffffff1f;
    z-index: 100;
    ${ProjImg}:first-child {
      transform: scale(1.1) translateY(-1rem);
    }
  }
`;

const VProjCard = styled(ProjCard)`
  width: calc(35% - 1rem);
  height: 20rem;
  &:hover {
    transform: scale(1.05);
  }
`;

const HProjCard = styled(ProjCard)`
  width: calc(65% - 1rem);
  height: 20rem;
  &:hover {
    transform: scaleX(1.027) scaleY(1.05);
  }
`;

const LandProjCard = styled(ProjCard)`
  width: calc(100% - 1rem);
  height: 20rem;
  &:hover {
    transform: scale(1.05);
  }
`;

const PairProjCard = styled.div<{ reverse: boolean }>`
  display: flex;
  flex-direction: ${(props) => (props.reverse ? "row-reverse" : "row")};
`;

const ProjTitle = styled.div`
  color: white;
  font-family: NeutralFace;
  font-weight: bold;
  font-size: 1.5rem;
  z-index: 1;
  margin: 12rem 1rem 0.5rem;
`;
const ProjDesc = styled.div`
  font-family: Archia;
  font-size: 1rem;
  z-index: 1;
  margin: 0 1rem;
  color: white;
`;

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

const TitleLayer = styled.div`
  text-align: center;
  margin-left: 2.5vw;
`;

const animateFlicker = keyframes`
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
`;

type StyledTitleLettersProps = {
  index: number;
  delay: number;
};
const StyledTitleLetters = styled(TitleLetters)<StyledTitleLettersProps>`
  animation: ${animateFlicker} 7s infinite;
  animation-delay: ${(props) => props.delay}s;
  opacity: ${(props) => (8 - props.index) * 0.15 - 0.09};
`;

const TitleLayers = ({ index }: { index: number }) => {
  const titleLetters = ["P", "R", "O", "J", "E", "C", "T", "S"];

  return (
    <TitleLayer>
      {titleLetters.map((letter, i) => (
        <StyledTitleLetters key={i} index={index} delay={index}>
          {letter}
        </StyledTitleLetters>
      ))}
    </TitleLayer>
  );
};

type CardContent = {
  title: string | string[];
  desc: string;
  img: string | string[];
};

const CardContent = ({ title, desc, img }: CardContent) => {
  const src = Array.isArray(img) ? img[0] : img;
  return (
    <>
      <ProjImg src={src} />
      <ProjTitle>{title}</ProjTitle>
      <ProjDesc>{desc}</ProjDesc>
    </>
  );
};

type ProjCardProps = CardContent & {
  type: string;
  reverse?: boolean;
};

const ProjCardsLayer = ({ type, reverse, title, desc, img }: ProjCardProps) => {
  const isPairType = type === "PAIR";

  return (
    <>
      {isPairType ? (
        <PairProjCard reverse={reverse || false}>
          <VProjCard>
            <CardContent title={title[0]} desc={desc} img={img[0]} />
          </VProjCard>
          <HProjCard>
            <CardContent title={title[1]} desc={desc} img={img[1]} />
          </HProjCard>
        </PairProjCard>
      ) : (
        <LandProjCard>
          <CardContent title={title} desc={desc} img={img} />
        </LandProjCard>
      )}
    </>
  );
};

const Projects = () => {
  const indices = [1, 2, 3, 4, 5, 6, 7];

  return (
    <ProjectsContainer id="Projects">
      <Title>
        {indices.map((index) => (
          <TitleLayers key={index} index={index} />
        ))}
      </Title>
      <ProjCards>
        <ProjCardsLayer
          type="PAIR"
          title={["Tic Tac Toe Minimax", "MERN VOID"]}
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Fusce pulvinar fermentum lorem, a dapibus ex mattis nec. Donec sit amet lectus 
                quam. Praesent commodo ante in justo finibus congue. Curabitur vel viverra "
          img={["./assets/cardArts/tictactoe.png", "./assets/cardArts/MERN.jpg"]}
        />
        <ProjCardsLayer
          type="PAIR"
          reverse
          title={["CabTap", "London Transit"]}
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Fusce pulvinar fermentum lorem, a dapibus ex mattis nec. Donec sit amet lectus 
                quam. Praesent commodo ante in justo finibus congue. Curabitur vel viverra "
          img={["./assets/cardArts/Taxi.jpeg", "./assets/cardArts/london.jpeg"]}
        />
        <ProjCardsLayer
          type="LAND"
          title="KIRBY'S DREAMLAND 1992"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Fusce pulvinar fermentum lorem, a dapibus ex mattis nec. Donec sit amet lectus 
                quam. Praesent commodo ante in justo finibus congue. Curabitur vel viverra "
          img="./assets/cardArts/Kirby.jpg"
        />
      </ProjCards>
    </ProjectsContainer>
  );
};

export default Projects;
