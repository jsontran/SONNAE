import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: NeutralFace;
    src: url("./fonts/NeutralFace.otf") format("opentype");
  }
  @font-face {
    font-family: NeutralFace;
    src: url("./fonts/NeutralFace-Bold.otf") format("opentype");
    font-weight: bold;
  }
  @font-face {
    font-family: AGaramondPro;
    src: url("./fonts/AGaramondPro.otf") format("opentype");
  }
  @font-face {
    font-family: AGaramondPro;
    src: url("./fonts/AGaramondPro-Bold.otf") format("opentype");
    font-weight: bold;
  }


  @font-face {
    font-family: TuskerGrotesk;
    src: url("./fonts/TuskerGrotesk.otf") format("opentype");
  }
  @font-face {
    font-family: SkModernist;
    src: url("./fonts/SkModernist.otf") format("opentype");
  }


  html {
    scroll-behavior: smooth;
    width: 100vw;
    
  }
  
  body {
    margin: 0;
  background-color: #fafafa;
  }
`;

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
