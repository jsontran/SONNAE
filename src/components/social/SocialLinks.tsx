import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

// Types for social links for better type safety
export interface SocialLink {
  id: string;
  href: string;
  label: string;
  icon: React.ReactNode;
}

export interface SocialLinksProps {
  onLinkClick: (link: string) => void;
}

// Component for social media links
const SocialLinks: React.FC<SocialLinksProps> = ({ onLinkClick }) => {
  // Define social links data
  const socialLinks: SocialLink[] = [
    {
      id: "email",
      href: "mailto:jjsontran@gmail.com",
      label: "Email Me",
      icon: <EmailIcon className="w-8 h-8 transition-colors duration-250" />,
    },
    {
      id: "linkedin",
      href: "https://www.linkedin.com/in/jsontran/",
      label: "Connect on LinkedIn",
      icon: <LinkedInIcon className="w-8 h-8 transition-colors duration-250" />,
    },
    {
      id: "github",
      href: "https://github.com/jsontran",
      label: "Check GitHub",
      icon: (
        <GitHubIcon className="w-8 h-8 transition-colors duration-250 scale-90" />
      ),
    },
  ];

  return (
    <div className="flex items-center justify-center p-2 rounded-xl bg-white/80 shadow-md border border-border-light w-fit">
      {socialLinks.map((link) => (
        <div className="tooltip mr-4 last:mr-0" key={link.id}>
          <button
            onClick={() => onLinkClick(link.href)}
            aria-label={link.label}
            className="text-text-secondary hover:text-primary transition-colors duration-150 flex items-center justify-center"
          >
            {link.icon}
            <span className="tooltip-text">{link.label}</span>
          </button>
        </div>
      ))}
    </div>
  );
};

export default SocialLinks;
