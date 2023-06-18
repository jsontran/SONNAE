import React from "react";
import styled, { css } from "styled-components";
import { StyledEngineProvider } from "@mui/material";
import { Face2 as Face2Icon, Work as WorkIcon, StarBorder as StarBorderIcon, Code as CodeIcon } from "@mui/icons-material";

const NavBarContainer = styled.div`
  position: fixed;
  display: inline-flex;
  flex-direction: column;
  left: 1rem;
  top: 1.5rem;
  width: 3.5rem;
  min-height: 3.5rem;
  height: fit-content;
  overflow: hidden;
  z-index: 999;
  scroll-behavior: smooth;
  transition: all 0.25s ease;
`;

const MenuComponent = styled.div`
  width: 100%;
  height: 3px;
  background-color: #505050;
  transition: 1s all ease;
`;

const NavMenu = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  width: 1.375rem;
  height: 1.375rem;
  padding: 1rem;
  margin-top: -0.5rem;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.5rem;
  background-color: #fafafa;
  cursor: pointer;
  z-index: 1000;

  &.active {
    ${MenuComponent}:first-child {
      background-color: #1e1d1d;
      transform-origin: top center;
      transform: rotate(45deg) translate(4px, 2.5px);
    }

    ${MenuComponent}:last-child {
      background-color: #1e1d1d;
      transform-origin: bottom center;
      transform: rotate(-45deg) translate(3.5px, -2.5px);
    }
  }
`;

const Icon = css`
  width: 5rem;
  height: 1.5rem;
  margin: 1rem;
  z-index: 998;
  color: #505050;
  cursor: pointer;
  transition: all 0.25s ease;
  border-radius: 20%;

  &:hover {
    color: #1e1d1d;
    transform: scale(1.2);
  }
`;

const StyledIcon = styled.div`
  ${Icon}
`;

const Work = styled(StyledIcon)`
  transform: scale(1.4);

  &:hover {
    transform: scale(1.6);
  }
`;

const Star = styled(StyledIcon)`
  transform: scale(1.4);

  &:hover {
    transform: scale(1.6);
  }
`;

const Code = styled(StyledIcon)`
  transform: scale(1.1);

  &:hover {
    transform: scale(1.3);
  }
`;

const Face = styled(StyledIcon)``;

const NavItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  transition: all 0.5s ease;
  z-index: 998;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.5rem;
  background-color: #fafafa;

  &.itemContainer-true {
    margin-top: 3.25rem;
  }

  &.itemContainer-false {
    margin-top: -20rem;
  }
`;

export type NavBarProps = {
  navState: boolean;
  setNavState: React.Dispatch<React.SetStateAction<boolean>>;
};

const NavBar: React.FC<NavBarProps> = ({ navState, setNavState }) => {
  const handleNav = (page: string) => {
    window.location.href = page;
  };

  return (
    <StyledEngineProvider injectFirst>
      <NavBarContainer>
        <NavMenu className={navState ? "active" : ""} onClick={() => setNavState(!navState)}>
          <MenuComponent />
          <MenuComponent />
        </NavMenu>
        <NavItemContainer className={`itemContainer-${navState}`}>
          <Star as={StarBorderIcon} onClick={() => handleNav("#Home")} />
          <Face as={Face2Icon} onClick={() => handleNav("#About")} />
          <Work as={WorkIcon} onClick={() => handleNav("#Experience")} />
          <Code as={CodeIcon} onClick={() => handleNav("#Projects")} />
        </NavItemContainer>
      </NavBarContainer>
    </StyledEngineProvider>
  );
};

export default NavBar;
