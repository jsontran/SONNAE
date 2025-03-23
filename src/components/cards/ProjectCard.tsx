import React from "react";
import { LazyImage } from "../../components";

// Types definition for better code documentation and type safety
export interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  githubUrl: string;
  size: "small" | "medium" | "large";
  imageAlt?: string;
  onClickLink?: (url: string) => void;
}

// Reusable component for project cards
const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  githubUrl,
  size,
  imageAlt,
  onClickLink,
}) => {
  // Determine styling based on size prop
  const getCardStyles = () => {
    switch (size) {
      case "large":
        return {
          container:
            "col-span-1 md:col-span-12 glass-card group cursor-pointer",
          height: "h-96",
          infoPosition: "bottom-8 left-8 right-8",
          padding: "p-5",
          titleSize: "text-2xl",
        };
      case "medium":
        return {
          container: "col-span-1 md:col-span-8 glass-card group cursor-pointer",
          height: "h-64",
          infoPosition: "bottom-6 left-6 right-6",
          padding: "p-4",
          titleSize: "text-xl",
        };
      case "small":
      default:
        return {
          container: "col-span-1 md:col-span-4 glass-card group cursor-pointer",
          height: "h-64",
          infoPosition: "bottom-6 left-6 right-6",
          padding: "p-4",
          titleSize: "text-xl",
        };
    }
  };

  const styles = getCardStyles();

  const handleClick = () => {
    if (onClickLink) {
      onClickLink(githubUrl);
    }
  };

  return (
    <div onClick={handleClick} className={styles.container}>
      <div className={`relative ${styles.height} overflow-hidden rounded-2xl`}>
        <LazyImage
          src={imageUrl}
          alt={imageAlt || title}
          className="w-full h-full object-cover transition-all duration-500 ease-out-expo group-hover:scale-105"
        />
        <div
          className={`absolute ${styles.infoPosition} backdrop-blur-sm bg-white/10 border border-white/20 rounded-xl ${styles.padding} shadow-lg transition-all duration-300 group-hover:bg-white/15`}
        >
          <div className="flex flex-col gap-1.5">
            <h3
              className={`text-white font-neutralface font-bold ${styles.titleSize} text-shadow-sm`}
            >
              {title}
            </h3>
            <p className="text-white/95 font-archia text-sm md:text-base">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
