import React from "react";
import styled from "styled-components";

const NavBarContainer = styled.div`
  background-color: blue;

  position: fixed;
  display: inline-flex;
  flex-direction: column;
  margin: 0.5rem 0 0 0.5rem;
  padding: 0.5rem 0.5rem 0 0.5rem;
  z-index: 999;

  border-radius: 0.5rem;
`;

const NavMenu = styled.button`
  background-color: #ff7e7e;

  margin-bottom: 0.5rem;

  width: 2.5rem;
  height: 2.5rem;
  border: none;
  padding: 0;
`;

const NavItem = styled.a`
  background-color: red;

  width: 2.5rem;
  height: 2.5rem;
  margin-bottom: 0.5rem;
`;

const NavItemContainer = styled.div`
  display: none;

  &.active {
    display: inline-flex;
    flex-direction: column;
  }
`;

export type NavBarProps = {
  navState: boolean;
  setNavState: React.Dispatch<React.SetStateAction<boolean>>;
};

const NavBar = ({ navState, setNavState }: NavBarProps) => {
  return (
    <NavBarContainer>
      <NavMenu
        className={"Menu " + (navState && "active")}
        onClick={() => setNavState(!navState)}
      />
      <NavItemContainer className={"ItemContainer " + (navState && "active")}>
        <NavItem href="#Home" />
        <NavItem href="#About" />
        <NavItem href="#Career" />
        <NavItem href="#Projects" />
        <NavItem href="#Contact" />
      </NavItemContainer>
    </NavBarContainer>
  );
};

export default NavBar;
