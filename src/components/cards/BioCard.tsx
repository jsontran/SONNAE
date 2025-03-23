import React from "react";

export interface BioCardProps {
  children: React.ReactNode;
  className?: string;
}

const BioCard: React.FC<BioCardProps> = ({ children, className = "" }) => {
  const bioCardStyle = {
    background:
      "linear-gradient(180deg, rgba(250, 250, 250, 0.9) 40%, rgba(250, 250, 250, 0.6) 100%)",
    backdropFilter: "blur(8px)",
    WebkitBackdropFilter: "blur(8px)",
  };

  return (
    <div
      className={`text-base font-archia p-6 rounded-xl bg-white/90 shadow-md border border-border-light mb-4 hover-shadow gpu ${className}`}
      style={bioCardStyle}
    >
      {children}
    </div>
  );
};

export default BioCard;
