import React, { useCallback, memo } from "react";
import { LazyImage, SocialLinks, MarqueeText, BioCard } from "../components";

// Main About component
const About: React.FC = () => {
  // Memoize the link handler to prevent recreation on renders
  const handleLink = useCallback((link: string): void => {
    window.open(link);
  }, []);

  // Extracted styles for better readability
  const titleStyle = {
    textShadow: `-1px -1px 0 rgb(30, 29, 29), 1px -1px 0 rgb(30, 29, 29), -1px 1px 0 rgb(30, 29, 29), 1px 1px 0 rgb(30, 29, 29)`,
  };

  return (
    <div
      id="About"
      className="w-screen flex flex-col bg-background py-[12vh] overflow-hidden"
    >
      {/* Top content container */}
      <div className="w-[67vw] max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 z-10 relative">
        {/* Profile picture with optimized loading */}
        <div className="w-full md:w-[40%] rounded-xl border border-border-light overflow-hidden hover-magnify">
          <LazyImage
            src="./assets/pfp.jpg"
            alt="Jason Tran"
            className="w-full h-full object-cover"
            placeholderColor="#f0f0f0"
          />
        </div>

        {/* Info section - will be alongside on desktop, below on mobile */}
        <div className="w-full md:w-[55%] flex flex-col">
          <h2
            className="font-neutralface font-bold text-4xl tracking-[0.25rem] mb-4 text-background gpu"
            style={titleStyle}
          >
            WHO AM I?
          </h2>

          <BioCard>
            <p>
              Currently, I am a fourth year Software Engineering (Co-op) student
              at McMaster University.
            </p>
            <br />
            <p>
              Apart from what I am studying in my curriculum, I am extending my
              current knowledge by teaching myself full-stack web development.
              In the future, I wish to follow my passion of creating beautifully
              advanced full-stack web applications. Moreover, I am driven to
              create impactful industry change by developing innovative,
              high-quality solutions that set new standards for the future.
            </p>
          </BioCard>

          {/* Social links - optimized for performance */}
          <SocialLinks onLinkClick={handleLink} />
        </div>
      </div>

      {/* Marquee text animation */}
      <MarqueeText text="DEVELOPER. DESIGNER. ENTREPRENEUR." />
    </div>
  );
};

export default memo(About);
