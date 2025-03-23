import React from "react";
import ScrollIndicatorArrow from "./ScrollIndicatorArrow";

export interface ScrollIndicatorProps {
  text?: string;
  className?: string;
  arrowProps?: React.ComponentProps<typeof ScrollIndicatorArrow>;
}

const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({
  text = "Scroll",
  className = "",
  arrowProps,
}) => {
  return (
    <div className={`flex flex-col items-center animate-float ${className}`}>
      <span className="text-text-secondary text-sm mb-2 font-archia opacity-75">
        {text}
      </span>
      <ScrollIndicatorArrow {...arrowProps} />
    </div>
  );
};

export default ScrollIndicator;
