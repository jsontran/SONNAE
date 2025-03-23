import React, { memo } from "react";
import { LazyImage } from "../../components";

// Define consistent interfaces for type safety and documentation
export interface ExperienceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string | string[];
  imageSrc: string;
}

interface ExperienceCardProps {
  item: ExperienceItem;
  index: number;
}

// Extracted description component for better composition
const Description: React.FC<{ content: string | string[] }> = ({ content }) => {
  if (Array.isArray(content)) {
    return (
      <>
        {content.map((item, idx) => (
          <div
            key={idx}
            className="pb-4 font-archia text-responsive-desc md:text-base whitespace-normal"
          >
            {item}
          </div>
        ))}
      </>
    );
  }

  return (
    <div className="pb-4 font-archia text-responsive-desc md:text-base whitespace-normal">
      {content}
    </div>
  );
};

// Memoize the ExperienceCard component to prevent unnecessary rerenders
const ExperienceCard = memo(({ item, index }: ExperienceCardProps) => {
  const { title, subtitle, description, imageSrc } = item;

  return (
    <div className="w-full h-fit border-l-[0.15rem] border-primary flex flex-col justify-center group gpu">
      <div className="-ml-[1.7rem] h-12 w-12 rounded-full border-[0.15rem] border-primary overflow-hidden transition-all duration-250 group-hover:scale-110 group-hover:-translate-y-1">
        <LazyImage
          src={imageSrc}
          alt={title}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="mb-16 ml-5 md:ml-20 rounded-lg border border-border-light backdrop-blur transition-all duration-300 ease-out-expo px-8 pb-4 group-hover:-translate-y-1 group-hover:shadow-card -mt-5">
        <div className="w-fit font-neutralface font-bold text-responsive-title md:text-[3rem] tracking-[0.05rem] py-0 px-2 -mt-6 -mr-20 mb-2 -ml-6 bg-background text-primary">
          {title}
        </div>
        <div className="w-fit font-skmodernist text-base tracking-[2px] pb-4 text-text-muted">
          {subtitle}
        </div>
        <Description content={description} />
      </div>
    </div>
  );
});

// Add display name for debugging
ExperienceCard.displayName = "ExperienceCard";

export default ExperienceCard;
