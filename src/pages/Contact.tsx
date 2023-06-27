import React from "react";
import styled from "styled-components";

const ContactContainer = styled.div`
  background-color: #fafafa;
  width: 100vw;
  min-width: 100vw;
  box-sizing: border-box;
  padding: 0 min(3vw, 4rem) 0 min(3vw, 4rem);
  height: clamp(4rem, 10vw, 8rem);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PillsContainer = styled.div`
  margin-right: auto;
  margin-left: auto;
`;

const Pills = styled.a`
  font-size: clamp(0.75rem, 2vw, 1.15rem);
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
  font-size: clamp(0.5rem, 2vw, 1rem);
  font-family: Archia;
  margin-right: min(8vw, 6rem);
`;

const TechStack = styled.div`
  text-align: right;
  font-size: clamp(0.5em, 2vw, 1rem);
  font-family: Archia;
  margin-left: min(4vw, 2rem);
`;

const links = [
  "mailto:jjsontran@gmail.com",
  "https://www.linkedin.com/jsontran",
  "https://www.github.com/jsontran",
];
const labels = ["EMAIL", "LINKEDIN", "GITHUB"];
const Contact = () => {
  return (
    <ContactContainer id="Contact">
      <Copyright>© 2023 Jason Tran</Copyright>
      <PillsContainer>
        {links.map((link, i) => (
          <Pills href={link}>{labels[i]}</Pills>
        ))}
      </PillsContainer>
      <TechStack>Made with REACT, TS, SC</TechStack>
    </ContactContainer>
  );
};

export default Contact;
