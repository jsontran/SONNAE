import React, { useState, useEffect } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import NavBar from "./components/NavBar";
import Scene from "./components/threejs/Scene";

const App = () => {
  const [navState, setNavState] = useState(false);

  useEffect(() => {
    const scrollTimeout = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 10);

    return () => clearTimeout(scrollTimeout);
  }, []);

  return (
    <>
      <NavBar navState={navState} setNavState={setNavState} />
      <Home />
      <Scene />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
};

export default App;
