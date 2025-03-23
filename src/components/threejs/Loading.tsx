import React, { useEffect, useState, memo } from "react";

interface ThreeJsLoadingProps {
  isLoading: boolean;
  fadeOutDuration?: number;
  message?: string;
}

/**
 * A specialized loading screen for 3D content with fade in/out transitions
 */
const ThreeJsLoading: React.FC<ThreeJsLoadingProps> = ({
  isLoading,
  fadeOutDuration = 1000,
  message = "Loading...",
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(isLoading);
  const [isFadingOut, setIsFadingOut] = useState<boolean>(false);

  useEffect(() => {
    let fadeTimer: NodeJS.Timeout | undefined;

    if (isLoading) {
      // When loading starts, immediately show and reset fade state
      setIsFadingOut(false);
      setIsVisible(true);
    } else {
      // When loading completes, start fade out transition
      setIsFadingOut(true);

      // After fade completes, hide the component entirely
      fadeTimer = setTimeout(() => setIsVisible(false), fadeOutDuration);
    }

    // Cleanup timer to prevent memory leaks
    return () => {
      if (fadeTimer) clearTimeout(fadeTimer);
    };
  }, [isLoading, fadeOutDuration]);

  // Compose class name for transitions
  const containerClasses = `
    fixed top-0 left-0 w-full h-screen 
    bg-background text-primary 
    flex justify-center items-center 
    text-2xl font-neutralface z-[1000] 
    transition-opacity duration-1000 ease-in-out
    ${isVisible ? "flex" : "hidden"}
    ${isFadingOut ? "opacity-0" : "opacity-100"}
  `
    .trim()
    .replace(/\s+/g, " ");

  return (
    <div className={containerClasses}>
      <h2 className="m-0">{message}</h2>
    </div>
  );
};

export default memo(ThreeJsLoading);
