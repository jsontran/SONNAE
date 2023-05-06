import React from "react";
import styled from "styled-components";

const NavBarContainer = styled.div`
  background-color: blue;

  position: absolute;
  display: inline-flex;
  flex-direction: column;
`;

const NavItem = styled.a`
  background-color: red;

  margin: 0 0 0.5rem 0;
  width: 3rem;
  height: 3rem;
`;

const NavBar = () => {
  return (
    <NavBarContainer>
      <NavItem href="#Home" />
      <NavItem href="#About" />
      <NavItem href="#Career" />
      <NavItem href="#Projects" />
      <NavItem href="#Contact" />
    </NavBarContainer>
  );
};

export default NavBar;
