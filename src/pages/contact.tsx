import React from "react";
import styled from "styled-components";

const ContactContainer = styled.div`
  background-color: #fafafa;
  width: 100vw;
  height: 8rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PillsContainer = styled.div`
  margin-right: auto;
  margin-left: auto;
`;

const Pills = styled.a`
  font-size: 1.15rem;
  font-family: NeutralFace;
  margin: 0.25rem;
  padding: 0.3rem 0.5rem 0.15rem 0.5rem;
  border-radius: 5rem;
  text-align: center;
  border: 1px solid #1e1d1d;
  text-decoration: none;
  color: #1e1d1d;
`;

const Copyright = styled.div`
  font-size: 1rem;
  font-family: Archia;
  margin-left: 2rem;
`;

const IconsContainer = styled.div`
  font-size: 1rem;
  font-family: Archia;
  margin-right: 2rem;
`;

const links = [
  "jjsontran@gmail.com",
  "https://www.github.com/jsontran",
  "https://www.linkedin.com/jsontran",
];
const labels = ["EMAIL", "GITHUB", "LINKEDIN"];
const Contact = () => {
  return (
    <ContactContainer id="Contact">
      <Copyright>© 2023 Jason Tran</Copyright>
      <PillsContainer>
        {links.map((link, i) => (
          <Pills href={link}>{labels[i]}</Pills>
        ))}
      </PillsContainer>
      <IconsContainer>Made with REACT, TS, SC</IconsContainer>
    </ContactContainer>
  );
};

export default Contact;
