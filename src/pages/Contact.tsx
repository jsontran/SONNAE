import React, { memo } from "react";
import ContactButton from "../components/ui/buttons/ContactButton";

// Type definitions for better type safety and documentation
interface ContactLink {
  url: string;
  label: string;
  tooltip: string;
}

// Extracted contact data for better maintainability
const contactLinks: ContactLink[] = [
  {
    url: "mailto:jjsontran@gmail.com",
    label: "EMAIL",
    tooltip: "Send an email",
  },
  {
    url: "https://www.linkedin.com/in/jsontran",
    label: "LINKEDIN",
    tooltip: "Visit LinkedIn profile",
  },
  {
    url: "https://www.github.com/jsontran",
    label: "GITHUB",
    tooltip: "Check out GitHub repositories",
  },
];

// Main component
const Contact: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="Contact"
      className="w-full h-fit min-h-20 bg-background flex justify-between items-center px-8 py-6 border-t border-border-light"
    >
      <div className="text-sm text-text-primary font-archia animate-fade-in">
        © {currentYear} Jason Tran
      </div>

      <div className="flex space-x-3 justify-center">
        {contactLinks.map((link, index) => (
          <ContactButton key={index} {...link} />
        ))}
      </div>

      <div className="text-sm text-text-primary font-archia animate-fade-in">
        Made with React, TypeScript, TailwindCSS
      </div>
    </footer>
  );
};

export default memo(Contact);
