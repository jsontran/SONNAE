import React from "react";
import styled from "styled-components";

const ExpContainer = styled.div`
  width: 100vw;
  height: fit-content;
  position: relative;
  display: flex;
  justify-content: center;
  padding: 2rem 0 0 0;
`;

const Star = styled.img`
  object-fit: cover;
  position: absolute;
  width: 45rem;
  height: 45rem;
  bottom: 15vh;
  left: 60vw;
  z-index: 0;
`;

const ExpSection = styled.div`
  height: max(100%, fit-content);
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Icon = styled.img`
  border-radius: 50%;
  height: 3rem;
  width: 3rem;
  background-color: white;
  margin-left: -1.7rem;
  border: 0.15rem solid #1e1d1d;
  object-fit: cover;
  transition: all 0.25s ease;
`;

const ExpCard = styled.div`
  height: fit-content;
  margin: -1.25rem 0rem 4rem 5rem;
  border-radius: 0.5rem;
  border: 1px solid rgba(0, 0, 0, 0.2);
  -webkit-backdrop-filter: blur(12px);
  backdrop-filter: blur(12px);
  transition: all 0.25s ease;
  padding: 0 2rem 1rem 2rem;
`;

const Timeline = styled.div`
  width: 100%;
  height: fit-content;
  border-left: 0.15rem solid #1e1d1d;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &:hover {
    ${Icon} {
      transform: scale(1.15) translateY(-0.2rem);
    }

    ${ExpCard} {
      transform: translateY(-0.2rem);
      box-shadow: 0px 5px 10px 0px #00000020;
    }
  }
`;

const ExpTitle = styled.div`
  width: fit-content;
  font-family: NeutraLFace;
  font-weight: bold;
  font-size: 3rem;
  letter-spacing: 0.05rem;
  padding: 0 0.5rem;
  margin: -1.5rem -5rem 0.5rem -1.5rem;
  background-color: #fafafa;
  color: #1e1d1d;

  @media (min-height: 100vw) and (max-width: 768px), (max-width: 768px) {
    font-size: clamp(1.25rem, 5vw, 5rem);
    margin: -1rem -5rem 0.5rem -1.5rem;
  }
`;

const ExpSubtitle = styled.div`
  width: fit-content;
  font-family: Skmodernist;
  font-size: 1.5;
  letter-spacing: 2px;
  padding: 0 0 1rem;
  color: #757575;
`;

const ExpDesc = styled.div`
  padding: 0 0 1rem;
  font-family: Archia;
  font-size: 1rem;
  white-space: normal;

  @media (min-height: 100vw) and (max-width: 768px), (max-width: 768px) {
    font-size: clamp(0.8rem, 3.5vw, 1rem);
  }
`;

const TimelineContainer = styled.div`
  width: min(100%, 72rem);
  max-width: 100vw;
  display: flex;
  box-sizing: border-box;
  padding: 0 1rem 0 2.5rem;
  z-index: 1;

  @media (min-height: 100vw) and (max-width: 768px), (max-width: 768px) {
    width: 100vw;
    max-width: 100vw;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Title = styled.div`
  writing-mode: vertical-rl;
  transform-origin: top left;
  white-space: nowrap;
  font-size: 10vh;
  font-family: NeutralFace;
  font-weight: bold;
  letter-spacing: 3rem;
  margin-right: 8rem;
  color: #fafafa;
  text-shadow: -1px -1px 0 #1e1d1d, 1px -1px 0 #1e1d1d, -1px 1px 0 #1e1d1d,
    1px 1px 0 #1e1d1d;

  @media (min-height: 100vw) and (max-width: 768px), (max-width: 768px) {
    width: fit-content;
    margin: 0 0 1rem 0;
    writing-mode: horizontal-tb;
    letter-spacing: 1rem;
    font-size: clamp(1.75rem, 5vw, 5rem);
  }
`;

const ExperienceCardContainer = styled(Timeline)`
  ${Icon} {
    margin-left: -1.7rem;
  }
  ${ExpCard} {
    margin: -1.25rem 0rem clamp(2rem, 4vw, 4rem) clamp(2rem, 5vw, 5rem);
  }
`;

type ExperienceCardProps = {
  title: string;
  subtitle: string;
  desc: string | string[];
  img: string;
};

const ExperienceCard = ({
  title,
  subtitle,
  desc,
  img,
}: ExperienceCardProps) => {
  return (
    <ExperienceCardContainer>
      <Icon src={img} />
      <ExpCard>
        <ExpTitle>{title}</ExpTitle>
        <ExpSubtitle>{subtitle}</ExpSubtitle>
        {Array.isArray(desc) ? (
          desc.map((item) => (
            <>
              <ExpDesc>{item}</ExpDesc>
            </>
          ))
        ) : (
          <ExpDesc>{desc}</ExpDesc>
        )}
      </ExpCard>
    </ExperienceCardContainer>
  );
};

const Experience = () => {
  const evertzDesc = `A part of a project-driven unit to be challenged to design and 
  develop software used in leading television broadcast and film production facilities 
  internationally, including CBC, ABC, NBC, HBO, and the BBC.`;

  const patternDesc = [
    `Contributed within a full-stack web development environment
    to solve problems for the hourly workforce.`,

    `It was achieved by reducing production 
    errors through the implementation of modular web components, and ensuring a high 
    standard of quality through testing driven developement. Includes but not limited 
    to translating design flows into responsive webpages, building flexible dashboards, 
    refactoring to increased modularity and developing support for mobile fluidity.`,
  ];

  const mcmasterDesc = [
    `With the Summer Research Position Award, I had the opportunity 
    to work under Dr. Mark Lawford, Dr. Alan Wassyng, and Dr. Vera Pantelic in the 
    Department of Computing and Software.`,
    `Assigned to work on the Reach/Coreach tool which highlights data and control 
    flow in a Simulink model within the MatLab IDE. The tool identifies the 
    selection's dependant blocks and/or the block that depended on the it.`,
  ];

  const dscDesc = [
    `Powered by the Developer Student Clubs, Google Developers.`,
    `The club's mission is to encourage and teach students about Google Developer 
    Techonolgies along with other aspects of the Software Engineering industry.`,
    `As the Lead of Marketing & Branding, I helped lead a team of 20 and 
    helped recruited over 400 members in its inaugral year.`,
  ];

  return (
    <ExpContainer id="Experience">
      <Star src="./assets/star.png" />
      <TimelineContainer>
        <Title>Experience</Title>
        <ExpSection>
          <ExperienceCard
            title="Evertz"
            subtitle="Software Engineer | May '23 - Present"
            desc={evertzDesc}
            img={"./assets/logos/evertz.png"}
          />
          <ExperienceCard
            title="Pattern"
            subtitle="Software Engineer | May '22 - Aug '22"
            desc={patternDesc}
            img={"./assets/logos/pattern.jpeg"}
          />
          <ExperienceCard
            title="McSCert"
            subtitle="Research Assistant | May '21 - Aug '21"
            desc={mcmasterDesc}
            img={"./assets/logos/mcscert.png"}
          />
          <ExperienceCard
            title="Google DSC"
            subtitle="Vice President of Marketing | Sept '20 - Apr '20"
            desc={dscDesc}
            img={"./assets/logos/dsc.png"}
          />
        </ExpSection>
      </TimelineContainer>
    </ExpContainer>
  );
};

export default Experience;
