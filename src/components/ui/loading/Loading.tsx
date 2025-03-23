import React, { memo } from "react";

interface LoadingProps {
  message?: string;
  size?: "small" | "medium" | "large";
  overlay?: boolean;
}

/**
 * A reusable loading spinner component with customizable size and message
 */
const Loading: React.FC<LoadingProps> = ({
  message = "Loading content...",
  size = "medium",
  overlay = true,
}) => {
  // Determine size styles based on the size prop
  const spinnerSizes = {
    small: "w-6 h-6 border-2",
    medium: "w-12 h-12 border-4",
    large: "w-16 h-16 border-4",
  };

  const textSizes = {
    small: "text-xs mt-2",
    medium: "text-sm mt-4",
    large: "text-base mt-4",
  };

  const spinnerClasses = `${spinnerSizes[size]} border-primary border-t-transparent rounded-full animate-spin`;
  const textClasses = `${textSizes[size]} font-neutralface text-text-secondary`;

  // Base container styles
  const containerClasses = overlay
    ? "fixed inset-0 flex items-center justify-center bg-background z-30"
    : "flex items-center justify-center";

  return (
    <div className={containerClasses}>
      <div className="flex flex-col items-center">
        <div className={spinnerClasses}></div>
        {message && <span className={textClasses}>{message}</span>}
      </div>
    </div>
  );
};

export default memo(Loading);
