import React from "react";

export interface AnimatedTitleProps {
  text?: string;
  indices?: number[];
  textSizeClass?: string;
  trackingClass?: string;
}

// Reusable title component with animation
const AnimatedTitle: React.FC<AnimatedTitleProps> = ({
  text = "PROJECTS",
  indices = [1, 2, 3, 4, 5, 6, 7, 8, 9],
  textSizeClass = "text-[min(12vw,15rem)]",
  trackingClass = "tracking-[min(2.5vw,2.5rem)]",
}) => {
  return (
    <div className="absolute flex flex-col justify-center">
      {indices.map((index) => (
        <div key={index} className="text-center ml-[2.5vw] -my-[2vw]">
          <span
            className={`${textSizeClass} font-neutralface font-bold ${trackingClass} inline-block align-middle text-background shadow-text transition-all duration-250 ease-in will-change-transform`}
            style={{
              animation: "flicker 7s infinite, float 6s ease-in-out infinite",
              animationDelay: `${index}s`,
              opacity: `${(9 - index) * 0.15 - 0.09}`,
            }}
          >
            {text}
          </span>
        </div>
      ))}
    </div>
  );
};

export default AnimatedTitle;
