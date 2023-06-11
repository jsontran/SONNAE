import React from "react";
import styled from "styled-components";

const ExpContainer = styled.div`
  width: 100vw;
  height: fit-content;
  position: relative;
  display: flex;
  justify-content: center;
  background-color: #fafafa;
  padding: 2rem 0 0 0;
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
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  transition: all 0.25s ease;
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
  letter-spacing: 0.05em;
  padding-right: 0.25rem;
  margin: -1.75rem 0 1rem -1.5rem;
  background-color: #fafafa;
  color: #1e1d1d;
`;

const ExpDesc = styled.div`
  padding: 0 2rem 2rem;
  font-family: Archia;
  font-size: 1.25rem;
`;

const TimelineContainer = styled.div`
  width: min(100%, 72rem);
  display: flex;
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
`;

const ExperienceCardContainer = styled(Timeline)`
  ${Icon} {
    margin-left: -1.7rem;
  }
  ${ExpCard} {
    margin: -1.25rem 0rem 4rem 5rem;
  }
`;

type ExperienceCardProps = {
  title: string;
  desc: string;
  img: string;
};

const ExperienceCard = ({ title, desc, img }: ExperienceCardProps) => {
  return (
    <ExperienceCardContainer>
      <Icon src={img} />
      <ExpCard>
        <ExpTitle>{title}</ExpTitle>
        <ExpDesc>{desc}</ExpDesc>
      </ExpCard>
    </ExperienceCardContainer>
  );
};

const Experience = () => {
  const evertzDesc = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Fusce pulvinar fermentum lorem, a dapibus ex mattis nec. Donec sit amet lectus 
    quam. Praesent commodo ante in justo finibus congue. Curabitur vel viverra 
    arcu. Quisque ultrices quis mi consequat malesuada. Lorem ipsum dolor sit amet, 
    consectetur adipiscing elit. Nullam et egestas ex, sit amet fringilla diam. 
    Praesent rhoncus felis sit amet ex tempus facilisis. Morbi condimentum interdum 
    dolor in consectetur. Pellentesque non nisl eu nisi varius tincidunt. Integer 
    nec purus dapibus, ultrices enim quis, consectetur turpis. Vestibulum et nisi 
    mollis, ornare mauris eget, varius metus. Sed augue magna, congue a lorem ut, 
    hendrerit tincidunt velit. In hac habitasse platea dictumst.`;

  const patternDesc = `Mentored under Peter Nguyen, and Rohan Bhangui, 
    I worked in a full-stack web development environment 
    to solve problems for the hourly workforce. 
    Responsibilities included reducing production errors, 
    implementing modular web components, and ensuring a high 
    standard of quality through testing. The previous was 
    achieved through translating design flows into responsive 
    webpages, built flexible dashboards, and increased 
    modularity through the use of Storybook. Furthermore, 
    by developing support for mobile fluidity through the backend, 
    it enhances the user experience.`;

  const mcmasterDesc = `With the Summer Research Position Award, I had 
    the opportunity to work under Dr. Mark Lawford, Dr. Alan Wassyng, and 
    Dr. Vera Pantelic in the Department of Computing and Software. I was 
    assigned to work on the Reach/Coreach tool which highlights data and 
    control flow in a Simulink model with the MatLab IDE. The tool 
    identifies the selection's dependant blocks and/or the block that 
    depended on the it.`;

  const dscDesc = `Powered by the Developer Student Clubs, Google Developers. 
    The club's goal is to encourage and teach students about Google Developer 
    Techonolgies along with other aspects of the Software Engineering industry.

    As one of the Lead of Marketing & Branding, I helped lead a team of 20 and 
    helped recruited over 400 members. I specifically worked and taught Photoshop 
    and Figma.`;

  return (
    <ExpContainer id="Experience">
      <TimelineContainer>
        <Title>Experience</Title>
        <ExpSection>
          <ExperienceCard
            title="Evertz"
            desc={evertzDesc}
            img={"./assets/evertz.png"}
          />
          <ExperienceCard
            title="Pattern"
            desc={patternDesc}
            img={"./assets/pattern.jpeg"}
          />
          <ExperienceCard
            title="McSCert"
            desc={mcmasterDesc}
            img={"./assets/mcscert.png"}
          />
          <ExperienceCard
            title="Google DSC"
            desc={dscDesc}
            img={"./assets/dsc.png"}
          />
        </ExpSection>
      </TimelineContainer>
    </ExpContainer>
  );
};

export default Experience;
