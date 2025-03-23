import React from "react";

export interface ContactButtonProps {
  url: string;
  label: string;
  tooltip: string;
  className?: string;
}

const ContactButton: React.FC<ContactButtonProps> = ({
  url,
  label,
  tooltip,
  className = "",
}) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className={`contact-tooltip tooltip px-4 py-1 text-xs uppercase border border-border rounded-full text-center text-text-primary font-neutralface transition-all duration-300 ease-out-expo hover:bg-primary hover:text-background hover:scale-105 ${className}`}
  >
    {label}
    <span className="tooltip-text">{tooltip}</span>
  </a>
);

export default ContactButton;
