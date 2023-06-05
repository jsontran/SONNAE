import React from "react";
import styled, { css } from "styled-components";

const NavBarContainer = styled.div`
  background-color: white;
  min-height: 2.5rem;
  height: fit-content;

  position: fixed;
  display: inline-flex;
  flex-direction: column;
  margin: 1rem 0 0 1rem;
  overflow: hidden;
  z-index: 999;

  border: 2px solid #767676;
  border-radius: 0.5rem;
  scroll-behavior: smooth;
`;

const NavMenu = styled.button`
  background-color: #d5d5d5;
  z-index: 1000;

  width: 2.5rem;
  height: 2.5rem;
  border: none;
  cursor: pointer;
`;

const NavItem = styled.a`
  background-color: #c0c0c0;

  width: 2.5rem;
  height: 2.5rem;
  z-index: 998;
`;

const NavItemContainer = styled.div`
  overflow: hidden;
  display: inline-flex;
  flex-direction: column;
  transition: all 0.5s ease;
  z-index: 998;

  &.true {
    margin-top: 0;
  }
  &.false {
    margin-top: -15rem;
  }
`;

export type NavBarProps = {
  navState: boolean;
  setNavState: React.Dispatch<React.SetStateAction<boolean>>;
};

const PAGES: string[] = ["#Home", "#About", "#Experience", "#Projects", "#Contact"];

const NavBar = ({ navState, setNavState }: NavBarProps) => {
  return (
    <NavBarContainer>
      <NavMenu
        className={"Menu " + (navState && "active")}
        onClick={() => setNavState(!navState)}
      />
      <NavItemContainer className={"ItemContainer " + navState}>
        {PAGES.map((page) => (
          <NavItem href={page} />
        ))}
      </NavItemContainer>
    </NavBarContainer>
  );
};

export default NavBar;
