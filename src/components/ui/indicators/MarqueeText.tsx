import React from "react";

export interface MarqueeTextProps {
  text: string;
  fontSize?: string;
  color?: string;
}

// Component for animated marquee text
const MarqueeText: React.FC<MarqueeTextProps> = ({
  text = "DEVELOPER. DESIGNER. ENTREPRENEUR.",
  fontSize = "16vh",
  color = "text-primary",
}) => {
  // Styles for marquee text
  const marqueeTextStyle = {
    transform: "scale(0.95, 3)",
    lineHeight: "1.2",
  };

  return (
    <div className="w-full -mt-16 overflow-visible">
      <div className="whitespace-nowrap animate-[marquee_30s_linear_infinite]">
        <p
          className={`font-neutralface text-[${fontSize}] inline-block m-0 ${color}`}
          style={marqueeTextStyle}
        >
          {text}
        </p>
        <p
          className={`font-neutralface text-[${fontSize}] inline-block m-0 ${color}`}
          style={marqueeTextStyle}
        >
          {text}
        </p>
      </div>

      {/* Add custom keyframes for the marquee animation */}
      {/* @ts-ignore */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }
      `}</style>
    </div>
  );
};

export default MarqueeText;
