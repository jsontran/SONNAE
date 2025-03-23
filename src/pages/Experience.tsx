import React, { useMemo, memo } from "react";
import ExperienceCard, {
  ExperienceItem,
} from "../components/cards/ExperienceCard";

const Experience: React.FC = () => {
  // Define experience data
  const experienceItems: ExperienceItem[] = useMemo(
    () => [
      {
        id: "evertz",
        title: "Evertz",
        subtitle: "Software Engineer | May '23 - Present",
        description: `As part of a project-driven research unit, I am challenged to 
          design and develop software utilized by leading television broadcast and film 
          production facilities worldwide, including CBC, ABC, NBC, NBA, HBO, and the BBC.`,
        imageSrc: "./assets/logos/evertz.png",
      },
      {
        id: "pattern",
        title: "Pattern",
        subtitle: "Software Engineer | May '22 - Aug '22",
        description: [
          `Contributed within a full-stack web development environment
            to solve problems for the hourly workforce.`,
          `It was achieved by reducing production 
            errors through the implementation of modular web components, and ensuring a high 
            standard of quality through testing driven developement. Includes but not limited 
            to translating design flows into responsive webpages, building flexible dashboards, 
            refactoring to increased modularity and developing support for mobile fluidity.`,
        ],
        imageSrc: "./assets/logos/pattern.jpeg",
      },
      {
        id: "mcscert",
        title: "McSCert",
        subtitle: "Research Assistant | May '21 - Aug '21",
        description: [
          `With the Summer Research Position Award, I had the opportunity 
            to work under Dr. Mark Lawford, Dr. Alan Wassyng, and Dr. Vera Pantelic in the 
            Department of Computing and Software.`,
          `Assigned to work on the Reach/Coreach tool which highlights data and control 
            flow in a Simulink model within the MatLab IDE. The tool identifies the 
            selection's dependant blocks and/or the block that depended on the it.`,
        ],
        imageSrc: "./assets/logos/mcscert.png",
      },
      {
        id: "googleDsc",
        title: "Google DSC",
        subtitle: "Vice President of Marketing | Sept '20 - Apr '20",
        description: [
          `Powered by the Developer Student Clubs, Google Developers.`,
          `The club's mission is to encourage and teach students about Google Developer 
            Techonolgies along with other aspects of the Software Engineering industry.`,
          `As the Lead of Marketing & Branding, I helped lead a team of 20 and 
            helped recruited over 400 members in its inaugral year.`,
        ],
        imageSrc: "./assets/logos/dsc.png",
      },
    ],
    []
  );

  return (
    <div
      id="Experience"
      className="w-screen h-fit relative flex justify-center pt-8"
    >
      <div className="w-full max-w-[72rem] flex box-border px-4 pl-10 z-10 md:flex-row flex-col justify-center items-center">
        <div className="experience-title vertical-text whitespace-nowrap font-neutralface font-bold tracking-[1rem] md:tracking-[3rem] md:mr-32 mr-0 mb-4 md:mb-0 text-background shadow-text gpu">
          Experience
        </div>
        <div className="h-max flex flex-col justify-center">
          {experienceItems.map((item, index) => (
            <ExperienceCard key={item.id} item={item} index={index + 1} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default memo(Experience);
