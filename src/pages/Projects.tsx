import React from "react";
import styled, { keyframes } from "styled-components";

const ProjectsContainer = styled.div`
  position: relative;
  width: 100vw;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fafafa;
  margin-top: 8rem;
  padding: 2rem 0;
  overflow: hidden;
`;

const ProjCards = styled.div`
  width: min(70%, 86rem);
  display: flex;
  flex-direction: column;
  align-items: center;
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
    180deg,
    rgba(255, 255, 255, 0.85) 50%,
    rgba(0, 0, 0, 0.15) 80%
  );
  transform: scale(1.01);
  transition: 0.25s all ease;
`;

const ProjTitle = styled.div`
  color: white;
  font-family: NeutralFace;
  font-weight: bold;
  font-size: 1.5rem;
  z-index: 1;
  margin: 14rem 1rem 0.5rem;

  text-shadow: -1px -1px 0 #1e1d1d, 1px -1px 0 #1e1d1d, -1px 1px 0 #1e1d1d,
    1px 1px 0 #1e1d1d;
  letter-spacing: 2px;
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
    rgba(0, 0, 0, 0) 30%,
    rgba(0, 0, 0, 1) 70%
  );
  border: 1px solid rgba(255, 255, 255, 0.8);
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  transition: 0.25s all ease;
  transform: scale(1);
  &:hover {
    box-shadow: 0px 5px 10px 0px #ffffff1f;
    z-index: 100;
    ${ProjImg}:first-child {
      transform: scale(1.1) translateY(-1rem);
    }
  }

  @media (min-height: 100vw), (max-width: 768px) {
    margin: 0.5rem 0;
  }
`;

const VProjCard = styled(ProjCard)`
  width: calc(35% - 1rem);
  &:hover {
    transform: scale(1.05);
  }
  @media (min-height: 100vw), (max-width: 768px) {
    width: 100%;
    height: fit-content;
  }

  ${ProjTitle} {
    @media (min-height: 100vw), (max-width: 768px) {
      margin: 8rem 1rem 0.5rem;
    }
  }
`;

const HProjCard = styled(ProjCard)`
  width: calc(65% - 1rem);
  height: fit-content;
  &:hover {
    transform: scaleX(1.027) scaleY(1.05);
  }
  @media (min-height: 100vw), (max-width: 768px) {
    width: 100%;
  }

  ${ProjTitle} {
    @media (min-height: 100vw), (max-width: 768px) {
      margin: 8rem 1rem 0.5rem;
    }
  }
`;

const LandProjCard = styled(ProjCard)`
  width: calc(100% - 1rem);
  height: fit-content;
  &:hover {
    transform: scale(1.05);
  }
  @media (min-height: 100vw), (max-width: 768px) {
    width: 100%;
  }
`;

const PairProjCard = styled.div<{ reverse: boolean }>`
  display: flex;
  flex-direction: ${(props) => (props.reverse ? "row-reverse" : "row")};

  @media (min-height: 100vw), (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const ProjDesc = styled.div`
  height: fit-content;
  font-family: Archia;
  font-size: 1rem;
  z-index: 1;
  margin: 0 1rem;
  color: white;
  @media (min-height: 100vw), (max-width: 768px) {
    font-size: 0.8rem;
  }
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

type CardContentProps = {
  title: string | string[];
  desc: string | string[];
  img: string | string[];
};

const CardContent = ({ title, desc, img }: CardContentProps) => {
  const src = Array.isArray(img) ? img[0] : img;
  return (
    <>
      <ProjImg src={src} />
      <ProjTitle>{title}</ProjTitle>
      <ProjDesc>{desc}</ProjDesc>
    </>
  );
};

type ProjCardProps = CardContentProps & {
  type: string;
  reverse?: boolean;
  link: string | string[];
};

const ProjCardsLayer = ({
  type,
  reverse,
  title,
  desc,
  img,
  link,
}: ProjCardProps) => {
  const isPairType = type === "PAIR";
  const [title1, title2] = reverse
    ? [title[1], title[0]]
    : [title[0], title[1]];
  const [desc1, desc2] = reverse ? [desc[1], desc[0]] : [desc[0], desc[1]];
  const [img1, img2] = reverse ? [img[1], img[0]] : [img[0], img[1]];
  const [link1, link2] = reverse ? [link[1], link[0]] : [link[0], link[1]];

  const handleLink = (link: string) => {
    window.open(link);
  };

  return (
    <>
      {isPairType ? (
        <PairProjCard reverse={reverse || false}>
          <VProjCard onClick={() => handleLink(link1)}>
            <CardContent title={title1} desc={desc1} img={img1} />
          </VProjCard>
          <HProjCard onClick={() => handleLink(link2)}>
            <CardContent title={title2} desc={desc2} img={img2} />
          </HProjCard>
        </PairProjCard>
      ) : (
        <LandProjCard
          onClick={() => {
            if (typeof link === "string") {
              handleLink(link);
            }
          }}
        >
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
          desc={[
            `Interactive Python script implementation of Minimax AI Algorithm with 
            Alpha-Beta pruning in Tic-Tac-Toe.`,
            `A user-centric, self-expression platform to support mental health by allowing 
            users to vent into the void with auto-deletion after 2 hours. Utilized Express, 
            Node.js, and MongoDB with Mongoose, and developed a responsive React front-end 
            with JavaScript and Sass.`,
          ]}
          img={["./assets/covers/tictactoe.png", "./assets/covers/MERN.jpg"]}
          link={[
            "https://github.com/jsontran/tictactoe-minimax",
            "https://github.com/jsontran/MERN-Void",
          ]}
        />
        <ProjCardsLayer
          type="PAIR"
          reverse
          title={["CabTap", "London Transit"]}
          desc={[
            `Community-driven ride-share application using Google's Maps API. Users have control 
            over their rides through community ratings, carpooling, and a rewards program, allowing 
            users to earn points through in-app games.`,
            `Interactive Python app with advanced algorithms for efficient 
            pathfinding and urbanism diagnosis. `,
          ]}
          img={["./assets/covers/Taxi.jpeg", "./assets/covers/london.jpeg"]}
          link={[
            "https://github.com/yousamasham/CabTap",
            "https://github.com/jsontran/London-Transit-App",
          ]}
        />
        <ProjCardsLayer
          type="LAND"
          title="KIRBY'S DREAMLAND 1992"
          desc={`Recreated the first level and boss battle from "Kirby Dream Land" using 
          Visual Basic.NET. Employed Object-Oriented Programming and utilized integrated toolbox, 
          and event-handlers to create engaging in-game interactions and user controls, resulting 
          in a highly responsive gameplay experience. The project demonstrates proficiency 
          in rendering, animation, hit-boxes, and real-time interactions. `}
          img="./assets/covers/Kirby.jpg"
          link={"https://github.com/jsontran/KirbyGame"}
        />
      </ProjCards>
    </ProjectsContainer>
  );
};

export default Projects;
