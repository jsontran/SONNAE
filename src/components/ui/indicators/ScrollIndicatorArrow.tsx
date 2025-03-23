import React from "react";

export interface ScrollIndicatorArrowProps {
  className?: string;
  width?: number;
  height?: number;
  strokeWidth?: number;
  color?: string;
}

// Reusable scroll indicator arrow component
const ScrollIndicatorArrow: React.FC<ScrollIndicatorArrowProps> = ({
  className = "",
  width = 24,
  height = 24,
  strokeWidth = 2,
  color = "currentColor",
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`text-text-secondary transition-all duration-500 ease-out-expo ${className}`}
  >
    <path
      d="M12 4L12 20M12 20L5 13M12 20L19 13"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ScrollIndicatorArrow;
