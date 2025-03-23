import React, { useEffect, useRef, memo } from "react";
import { createMouseFollow } from "../utils/animations";
import { ScrollIndicator } from "../components";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const nameRef = useRef<HTMLParagraphElement>(null);

  // Apply mouse follow effect on component mount
  useEffect(() => {
    if (nameRef.current) {
      // Subtle mouse-follow effect for the name
      createMouseFollow("#name-title", 0.02);
    }
  }, []);

  // Define styles for better organization
  const nameTitleStyle = {
    textShadow:
      "-1px -1px 0 #fafafa, 1px -1px 0 #fafafa, -1px 1px 0 #fafafa, 1px 1px 0 #fafafa",
  };

  return (
    <div
      id="Home"
      className="relative w-screen h-screen flex flex-col bg-background"
    >
      <p
        id="name-title"
        ref={nameRef}
        className="absolute leading-none top-[15%] left-0 m-0 font-neutralface font-bold text-[max(24vw,1.75rem)] tracking-tight text-center text-primary w-full animate-fade-in"
        style={nameTitleStyle}
      >
        Jason Tran
      </p>

      {/* Scroll indicator with animation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <ScrollIndicator />
      </div>
    </div>
  );
};

export default memo(Home);
