import React, { useCallback } from "react";
import { ProjectCard } from "../components";
import AnimatedTitle from "../components/titles/AnimatedTitle";
import { ProjectCardProps } from "../components/cards/ProjectCard";

// Project data - separated to make it easier to modify and extend
const projectsData: Omit<ProjectCardProps, "onClickLink">[] = [
  {
    title: "Alkalytics",
    description:
      "Data management tool using machine learning and AI for ocean alkalinity experiments to enhance CO2 absorption. Supports CSV migration, inter-parameter comparison, fast querying, and customizable data visualization through an intuitive web interface, with flexible architecture for expansion. Employs React for the frontend and Python with scikit-learn for the backend.",
    imageUrl: "./assets/covers/Alkalytics.jpeg",
    githubUrl: "https://github.com/SumanyaG/Alkalytics",
    size: "large",
    imageAlt: "Alkalytics project",
  },
  {
    title: "Tic Tac Toe Minimax",
    description:
      "Interactive Python script implementation of Minimax AI Algorithm with Alpha-Beta pruning in Tic-Tac-Toe. The algorithm evaluates all possible moves and chooses the optimal path, making it unbeatable in standard play.",
    imageUrl: "./assets/covers/tictactoe.png",
    githubUrl: "https://github.com/jsontran/tictactoe-minimax",
    size: "small",
    imageAlt: "Tic Tac Toe project",
  },
  {
    title: "MERN VOID",
    description:
      "A user-centric, self-expression platform to support mental health by allowing users to vent into the void with auto-deletion after 2 hours. Utilizes Express, Node.js, and MongoDB with Mongoose, and developed a responsive React front-end with JavaScript and Sass. Features anonymous posting and secure authentication.",
    imageUrl: "./assets/covers/MERN.jpg",
    githubUrl: "https://github.com/jsontran/MERN-Void",
    size: "medium",
    imageAlt: "MERN project",
  },
  {
    title: "CabTap",
    description:
      "Community-driven ride-share application using Google's Maps API. Users have control over their rides through community ratings, carpooling, and a rewards program, allowing users to earn points through in-app games. Features real-time location tracking and secure payment processing integration.",
    imageUrl: "./assets/covers/Taxi.jpeg",
    githubUrl: "https://github.com/yousamasham/CabTap",
    size: "medium",
    imageAlt: "CabTap project",
  },
  {
    title: "London Transit",
    description:
      "Interactive Python app with advanced algorithms for efficient pathfinding and urbanism diagnosis. Implements Dijkstra's algorithm for shortest path calculation and includes visualization tools for urban planning.",
    imageUrl: "./assets/covers/london.jpeg",
    githubUrl: "https://github.com/jsontran/London-Transit-App",
    size: "small",
    imageAlt: "London Transit project",
  },
  {
    title: "KIRBY'S DREAMLAND 1992",
    description:
      'Recreated the first level and boss battle from "Kirby Dream Land" using Visual Basic.NET. Employed Object-Oriented Programming and utilized integrated toolbox, and event-handlers to create engaging in-game interactions and user controls, resulting in a highly responsive gameplay experience. The project demonstrates proficiency in rendering, animation, hit-boxes, and real-time interactions.',
    imageUrl: "./assets/covers/Kirby.jpg",
    githubUrl: "https://github.com/jsontran/KirbyGame",
    size: "large",
    imageAlt: "Kirby game project",
  },
];

// Main component with clear organization
const Projects: React.FC = () => {
  // Memoize the event handler to prevent recreation on renders
  const handleLink = useCallback((link: string) => {
    window.open(link);
  }, []);

  return (
    <div
      id="Projects"
      className="relative w-screen h-fit flex flex-col items-center mt-32 py-8 overflow-hidden"
    >
      <AnimatedTitle />

      <div className="w-[min(85%,1280px)] grid grid-cols-1 md:grid-cols-12 gap-4 mt-[min(14vw,15rem)] mb-[min(14vw,15rem)]">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} {...project} onClickLink={handleLink} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
