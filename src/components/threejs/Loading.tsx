import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Overlay = styled.div<{ isVisible: boolean; isFadingOut: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #fafafa;
  color: black;
  display: ${({ isVisible }) => (isVisible ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-family: NeutralFace;
  z-index: 1000;
  opacity: ${({ isFadingOut }) => (isFadingOut ? 0 : 1)};
  transition: opacity 1s ease;
`;

const Message = styled.h2`
  margin: 0;
`;

interface LoadingProps {
  isLoading: boolean;
}

const Loading: React.FC<LoadingProps> = ({ isLoading }) => {
  const [isVisible, setIsVisible] = useState(isLoading);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    if (isLoading) {
      setIsFadingOut(false);
      setIsVisible(true);
    } else {
      setIsFadingOut(true);
      const fadeTimer = setTimeout(() => setIsVisible(false), 1000); 
      return () => clearTimeout(fadeTimer);
    }
  }, [isLoading]);

  return (
    <Overlay isVisible={isVisible} isFadingOut={isFadingOut}>
      <Message>Loading...</Message>
    </Overlay>
  );
};

export default Loading;
