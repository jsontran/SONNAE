import React, { memo, useCallback } from "react";
import {
  Face2 as Face2Icon,
  Work as WorkIcon,
  StarBorder as StarBorderIcon,
  Code as CodeIcon,
} from "@mui/icons-material";

// Define types for navigation items and props
interface NavItem {
  id: string;
  icon: React.ReactNode;
  label: string;
  target: string;
}

export interface NavBarProps {
  navState: boolean;
  setNavState: React.Dispatch<React.SetStateAction<boolean>>;
}

// Define navigation data for better maintainability
const navItems: NavItem[] = [
  {
    id: "home",
    icon: <StarBorderIcon fontSize="medium" />,
    label: "Home",
    target: "#Home",
  },
  {
    id: "about",
    icon: <Face2Icon fontSize="medium" />,
    label: "About",
    target: "#About",
  },
  {
    id: "experience",
    icon: <WorkIcon fontSize="medium" />,
    label: "Experience",
    target: "#Experience",
  },
  {
    id: "projects",
    icon: <CodeIcon fontSize="medium" />,
    label: "Projects",
    target: "#Projects",
  },
];

// Memoize individual navigation items to prevent unnecessary rerenders
const NavItemComponent = memo(
  ({
    icon,
    label,
    onClick,
  }: {
    icon: React.ReactNode;
    label: string;
    onClick: () => void;
  }) => (
    <div className="nav-tooltip flex items-center justify-center">
      <div
        className="m-3 z-[998] text-text-secondary cursor-pointer rounded-md hover:text-text-primary transition-colors duration-250 sm:m-2 gpu"
        onClick={onClick}
      >
        {icon}
        <span className="tooltip-text">{label}</span>
      </div>
    </div>
  )
);

NavItemComponent.displayName = "NavItem";

const NavBar: React.FC<NavBarProps> = ({ navState, setNavState }) => {
  // Memoize the navigation handler to prevent recreation on renders
  const handleNav = useCallback((target: string) => {
    window.location.href = target;
  }, []);

  // Toggle navigation state with memoized handler
  const toggleNav = useCallback(() => {
    setNavState(!navState);
  }, [navState, setNavState]);

  // Compute dynamic classes for better readability
  const toggleButtonClasses =
    "w-full h-0.5 bg-secondary transition-transform duration-300 ease-out-expo will-change-transform";
  const firstBarClasses = `${toggleButtonClasses} ${
    navState ? "rotate-45 translate-y-[5px]" : ""
  }`;
  const secondBarClasses = `${toggleButtonClasses} ${
    navState ? "-rotate-45 -translate-y-[5px]" : ""
  }`;

  const navMenuClasses = `
    flex flex-col justify-center items-center overflow-visible p-2 z-[998] 
    border border-border-light rounded-md bg-background shadow-sm 
    transition-all duration-300 ease-out-expo will-change-transform will-change-opacity 
    ${
      navState ? "mt-14 opacity-100" : "-mt-80 opacity-0 pointer-events-none"
    } gpu
  `
    .trim()
    .replace(/\s+/g, " ");

  return (
    <div className="fixed inline-flex flex-col left-4 top-6 w-14 min-h-14 h-fit overflow-visible z-50 sm:w-12 animate-fade-in">
      <div
        className="fixed flex justify-evenly flex-col w-14 h-14 p-4 -mt-2 border border-border-light rounded-md bg-background cursor-pointer z-50 sm:w-12 sm:h-12 transition-transform duration-250 hover:shadow-sm hover:scale-105 gpu"
        onClick={toggleNav}
        aria-label="Navigation toggle"
      >
        <div className={firstBarClasses} />
        <div className={secondBarClasses} />
      </div>

      <div className={navMenuClasses}>
        {navItems.map((item) => (
          <NavItemComponent
            key={item.id}
            icon={item.icon}
            label={item.label}
            onClick={() => handleNav(item.target)}
          />
        ))}
      </div>
    </div>
  );
};

export default memo(NavBar);
