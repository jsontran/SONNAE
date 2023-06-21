import React, { useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import NavBar from "./components/NavBar";

const App = () => {
  const [navState, setNavState] = useState(false);

  return (
    <>
      <NavBar navState={navState} setNavState={setNavState} />
      <Home />
      <About />
      <Experience />
      {/* <Projects /> */}
      <Contact />
    </>
  );
};

export default App;
