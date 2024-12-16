import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import GlobalStyle from "./GlobalStyle";
import Internship from "./components/Internship";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <About />
      <Projects />
      <Internship />
      <Skills />
      <Contact />
    </>
  );
}

export default App;