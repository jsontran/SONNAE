import React from "react";
import Home from "./pages/home";
import About from "./pages/about";
import Career from "./pages/career";
import Projects from "./pages/Projects";
import Contact from "./pages/contact";
import NavBar from "./components/navBar";

const App = () => {
  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Career />
      <Projects />
      <Contact />
    </>
  );
};

export default App;
