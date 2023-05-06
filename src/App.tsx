import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Career from "./pages/Career";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import NavBar from "./components/NavBar";

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
